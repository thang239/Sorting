describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles one item in array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles arrays with multiple items', function(){
        expect( bubbleSort([3,5,1,6,0,9]) ).toEqual( [0,1,3,5,6,9] );
    });
    it('swaps 2 times for the given array',function(){
      spyOn(window,'swap').andCallThrough();
      bubbleSort([3,1,2]);
      expect(swap.callCount).toEqual(2);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
       expect(merge([3,5], [2])).toEqual([2,3,5]);
    });

    it('is able to merge two sorted arrays', function(){
       expect(merge([1,3,5,7], [4,6,10])).toEqual([1,3,4,5,6,7,10]);
    });

    it('is able to sort the array', function(){
       expect(mergeSort([2,7,3,1,6,4,5])).toEqual([1,2,3,4,5,6,7]);
    });
    it('is able to sort the array', function(){
       expect(mergeSort([7])).toEqual([7]);
    });
    it('is able to sort the array', function(){
       expect(mergeSort([])).toEqual([]);
    });




});

describe('Split Array function', function() {

  it('is able to split an even array into two halves', function() {
    expect(halve([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(halve([1,2,3,4,5,6,7])).toEqual([[1,2,3],[4,5,6,7]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(halve([6,4,5])).toEqual([[6],[4,5]]);
  });
});

