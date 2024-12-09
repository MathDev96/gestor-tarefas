// Importação necessária para usar o decorador Injectable no Angular
import { Injectable } from '@angular/core';
// Importação do modelo de dados 'Task', que define a estrutura das tarefas
import { Task } from '../models/task';

// Decorador que torna essa classe um serviço que pode ser injetado em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // Provedor de escopo global, tornando o serviço acessível em toda a aplicação
})

// Classe TaskService, que contém a lógica para gerenciar tarefas
export class TaskService {

  // Construtor da classe. É vazio, pois o serviço não precisa de dependências externas no momento.
  constructor() { }

  // Declaração de uma variável privada que é um array (lista) de tarefas. 
  // Essa lista é inicializada como vazia.
  private tasks: Array<Task> = [];

  // Método público que retorna uma lista de tarefas. 
  // Primeiro busca os dados do LocalStorage e atualiza o array 'tasks'.
  public getTasks(): Array<Task> {
    this.tasks = this.getFromLocalStorage(); // Atualiza o array 'tasks' com os dados do LocalStorage
    return this.tasks; // Retorna a lista atualizada
  }

  // Método que busca uma tarefa específica pelo ID. 
  // Retorna a tarefa correspondente ou undefined se não encontrar.
  getById(id: number): Task | undefined {
    const task = this.tasks.find(c => c.id === id); // Procura no array 'tasks' uma tarefa com o ID fornecido
    return task; // Retorna a tarefa encontrada ou undefined
  }

  // Método público que adiciona uma nova tarefa ao array 'tasks'.
  // Recebe um objeto do tipo 'Task' como parâmetro.
  public addTask(task: Task): void {
    this.tasks.push(task); // Adiciona a nova tarefa ao final do array 'tasks'
  }

  // Método que atualiza o LocalStorage com os dados atuais do array 'tasks'.
  upDateTask() {
    this.saveToLocalStorage(); // Chama o método privado que salva os dados no LocalStorage
  }

  // Método público para remover uma tarefa específica do array 'tasks'.
  // Recebe um objeto 'task' como parâmetro.
  removeTask(task: Task) {
    const index = this.tasks.indexOf(task); // Obtém o índice da tarefa no array

    if (index !== -1) { // Verifica se a tarefa existe no array
      this.tasks.splice(index, 1); // Remove a tarefa do array
      this.saveToLocalStorage(); // Atualiza o LocalStorage
    }
  }

  // Método privado que salva os dados do array 'tasks' no LocalStorage.
  private saveToLocalStorage() {
    const tasksJSON = JSON.stringify(this.tasks); // Converte o array 'tasks' em uma string JSON
    localStorage.setItem('tasks', tasksJSON); // Salva a string no LocalStorage com a chave 'tasks'
  }

  // Método privado que carrega os dados do LocalStorage para o array 'tasks'.
  private getFromLocalStorage(): Array<Task> {
    const tasksJSON = localStorage.getItem('tasks'); // Obtém os dados salvos no LocalStorage com a chave 'tasks'

    if (!tasksJSON) { // Verifica se não existem dados salvos no LocalStorage
      return new Array<Task>(); // Retorna um array vazio
    }
    return JSON.parse(tasksJSON); // Converte a string JSON de volta para um array de objetos 'Task' e retorna
  }
}
