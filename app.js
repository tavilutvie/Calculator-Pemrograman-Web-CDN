new Vue({
    el: '#app',
    data: {
      operand1: '',
      operand2: '',
      result: '',
    },
    methods: {
      performOperation(operator) {
        const num1 = parseFloat(this.operand1);
        const num2 = parseFloat(this.operand2);
  
        if (isNaN(num1) || isNaN(num2)) {
          this.result = 'Invalid input';
        } else {
          switch (operator) {
            case '+':
              this.result = num1 + num2;
              break;
            case '-':
              this.result = num1 - num2;
              break;
            case '*':
              this.result = num1 * num2;
              break;
            case '/':
              if (num2 !== 0) {
                this.result = num1 / num2;
              } else {
                this.result = 'Division by zero';
              }
              break;
            default:
              this.result = 'Invalid operator';
          }
        }
      },
    },
  });
  