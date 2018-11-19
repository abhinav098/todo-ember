import Controller from '@ember/controller';
import {computed} from '@ember/object'

export default Controller.extend({
  newTitle: '',
  enableSubmit: computed.empty('newTitle'),
  actions:{
    createTodo(){
      const title = this.get('newTitle');
      const todo = this.store.createRecord('todo',{
        id: this.get('model.length') + 1,
        title: title,
      })
      todo.save();
      this.set('newTitle','');
    },
    removeTodo(todo){
      todo.destroyRecord();
    },
    markComplete(todo){
      todo.completed ? todo.set('completed', false) : todo.set('completed', true);
      todo.save();
    }
  }
});
