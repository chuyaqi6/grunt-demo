var expect = chai.expect;

describe('矩形面积函数测试',function(){
  it('area(10,5) = 50',function(){
    var r = rectangle();
    expect(r.area(10,5)).to.be.equal(50);
  });
  /*
  it('area(0.2,0.1) = 0.02',function(){
    var r = rectangle();
    expect(r.area(0.2,0.1)).to.be.equal(0.02);
  });*/
});
describe('矩形周长函数测试',function(){
  it('perimeter(1,2) = 6',function(){
    var p =rectangle();
    expect(p.perimeter(2,1)).to.be.equal(6);
  });
});
