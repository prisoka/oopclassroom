class Room {
  constructor(name, description, contents){
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(student){
    this.contents.push(student)
    return this
  }

  has(student){
    return this.contents.includes(student)
  }
}

module.exports = Room
