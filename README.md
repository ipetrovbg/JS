# JS
JavaScript snippets
### booblesort
```javascript
//include booblesort.array.prototype.js
    var myArray = [5, 2, 7, 10, 4];
    myArray.booblesort();
  ```
  ### contains
  ```javascript
  //include contains.array.prototype.js 
      var file = {
        type: 'image/jpeg'
      };
      var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      
      if(allowedTypes.contains(file.type)){
          console.log(file.type);
      }
  ```
