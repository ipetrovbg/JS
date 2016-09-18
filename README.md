# JS
JavaScript snippets
### booblesort
```javascript
  <script src="booblesort.array.prototype.js">
  <script>
    var myArray = [5, 2, 7, 10, 4];
    myArray.booblesort();
  </script>
  ```
  ### contains
  ```javascript
      var file = {
        type: 'image/jpeg'
      };
      var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      
      if(allowedTypes.contains(file.type)){
          console.log(file.type);
      }
  ```
