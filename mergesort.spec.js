describe('Split Array function', function() {
  it('es capaz de dividir el arreglo en dos partes', function() {
    expect( split([1, 2, 3, 4, 5, 6]) ).toEqual( [[1,2,3],[4,5,6]] );
  });
});

describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    expect( merge([1,2,3], [4,5,6]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
});

describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    var arr1 = [1, 3, 5];
    var arr2 = [2, 4, 6];
    var merged = merge(arr1, arr2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });
});