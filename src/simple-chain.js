/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  getLength() {
    return this.chain ? this.chain.length : 0;
  },

  addLink(value) {

    if (!this.chain) {
      this.chain = `( ${`${value}`} )`
    }

    else if (arguments.length === 0) {
      this.chain += "~~(  )";
    }

    else {
      this.chain += `~~( ${`${value}`} )`;
    }

    return this;
  },

  removeLink(position) {

    const chainArr = this.chain.split("~~");

    if (typeof position !== "number" || position < 1 || position > chainArr.length) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }

    let result = chainArr.slice(0, position - 1).join("~~") + "~~" + chainArr.slice(position).join("~~");

    if (result.startsWith("~~")) {
      result = result.slice(2);
    }

    this.chain = result;

    return this;
  },

  reverseChain() {
    
    if (this.chain) {
      const chainArr = this.chain.split("~~");
      this.chain = chainArr.reverse().join("~~");
    }
    
    return this;
  },

  finishChain() {
    const result = this.chain;
    delete this.chain;
    return result;
  }
};

console.log(chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain());

module.exports = {
  chainMaker
};
