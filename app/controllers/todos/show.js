import Controller from '@ember/controller';
import TodoController from '../todos'

export default Controller.extend({
  actions:{
    createComment(todo_id){
      const body = this.get('newComment');
      let comment = this.store.createRecord('comment', {
        todo: this.store.peekRecord("todo", todo_id),
        body: body
      });
      comment.save();
      this.set('newComment', '');
    },
    removeComment(comment){
      comment.destroyRecord();
    }
  }
});
