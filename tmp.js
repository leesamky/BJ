var _=require('lodash')

var expect=require('chai').expect

//not
expect(function(){}).to.not.throw()
expect({a:1}).to.not.have.property('b')
expect([1,2]).to.be.an('array').that.does.not.include(3)

//deep
expect({a:1}).to.deep.equal({a:1})
expect({a:1}).to.not.equal({a:1})

//own
//property and include to ignore inherited properties

var arr=[[12,4],[12,5],[12,6]]
