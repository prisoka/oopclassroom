class Desk {
  constructor(length, width, height, isWhiteboard, content){
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = false;
    this.content = "";
  }

  write(string){
    this.content += string;
  }

  wipe(){
    if (this.isWhiteboard === true){
      this.content = ""
    }
  }

}

module.exports = Desk
