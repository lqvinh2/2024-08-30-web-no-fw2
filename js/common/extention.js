//
//
// Vinh
//
//
String.prototype.getFirst = function getFirst(numberCharWantToGet) {
    if (!this) {
      return "";
    }
    if (this.length < numberCharWantToGet) {
      numberCharWantToGet = this.length;
    }
  
    return this.slice(0, numberCharWantToGet);
  };
  
  String.prototype.getLast = function getLast(numberCharWantToGet) {
    if (!this) {
      return "";
    }
    if (this.length < numberCharWantToGet) {
      numberCharWantToGet = this.length;
    }
  
    return this.slice(this.length - numberCharWantToGet);
  };
  
  String.prototype.getSub = function getSub(indexFrom, numberCharWantToGet) {
    if (!this) {
      return "";
    }
    return this.slice(indexFrom, indexFrom + numberCharWantToGet);
  };
  
  String.prototype.deleteFirst = function deleteFirst(numberCharWantTodelete) {
    if (!this) {
      return "";
    }
    return this.slice(numberCharWantTodelete);
  };
  
  String.prototype.deleteLast = function deleteLast(numberCharWantTodelete) {
    if (!this) {
      return "";
    }
    return this.slice(0, this.length - numberCharWantTodelete);
  };
  
  Array.prototype.getSubArray = function (fromIndex, toIndex) {
    fromIndex = fromIndex < 0 ? 0 : fromIndex;
    toIndex = toIndex > this.length - 1 ? this.length - 1 : toIndex;
    let result = [];
    for (let index = fromIndex; index <= toIndex; index++) {
      result.push(this[index]);
    }
    return result;
  };
  
  Array.prototype.removeDuplicate = function () {
    let result = [];
    
    this.forEach((ele, index) => {
      const element = ele.toString().trim();
      if (result.includes(element) == false) {
        result.push(element);
      }
    });
    return result;
  };
  
  Array.prototype.getRandomValue = function () {
    if (this) {
      const len = this.length;
      let rand = Math.random() * len;
      const indx = Math.round(rand);
      return this[indx];
    }
    return null;
  };
  