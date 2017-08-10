"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("五位数邮编编码", function(){

        var result = main('95713');
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';

        expect(expect_string).to.equal(result);
    });

    it("五位数条码译码", function(){

        var result = main('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string ='95713';

        expect(expect_string).to.equal(result);
    });

    it("十位数邮编编码", function(){

        var result = main('55555-1237');
        var expect_string ='|:|:|::|:|::|:|::|:|::|:|::::||::|:|::||:|:::|::|:||';

        expect(expect_string).to.equal(result);
    });

    it("十位数条码译码", function(){

        var result = main('|:::|||::|::::|||:|::::|:|:::||::|:|::||:|:::|:||::|');
        var expect_string ='18192-1237';

        expect(expect_string).to.equal(result);
    });

    it("九位数邮编编码", function(){

        var result = main('181921237');
        var expect_string ='|:::|||::|::::|||:|::::|:|:::||::|:|::||:|:::|:||::|';

        expect(expect_string).to.equal(result);
    });

});