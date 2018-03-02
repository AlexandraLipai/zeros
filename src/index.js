module.exports = function getZerosCount(number) {
  // your implementation


        var z = 0;
        while(number){
            number = (number/5)|0;
            z+=number;
        }
        return z;

}
