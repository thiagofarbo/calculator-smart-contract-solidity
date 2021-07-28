/*
    Smart Contract
    author: Thiago Correa
    Date: 28-07-2021

*/

pragma solidity ^0.8.4;

contract Calculator {

    uint result = 10;

    function sum(uint _value1, uint _value2) public returns (uint){
        return result = _value1 + _value2;
    }

    function subtract(uint _value1, uint _value2) public returns (uint){
        return result = _value1 - _value2;
    }

    function multiply(uint _value1, uint _value2)  public returns (uint) {
        return result = _value1 * _value2;
    }

    function divide(uint _value1, uint _value2)  public returns (uint) {
        return result = _value1 / _value2;
    }

    function getResult() public view returns (uint) {
        return result;
    }
}