#  Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
arr1 = [3, 7, 10, 5, 4, 3, 3]

arr2 = [7, 8, 2, 3, 1, 5, 4]

#  create a function that takes two arrays
def combine(arr1, arr2)
#  add both arrays together then using concantenation method
combine_arr = arr1.concat(arr2) 
#  return the uniq function to remove duplicate numbers .uniq needs to be in a block to perform properly
  combine_arr.uniq
end

puts combine arr1, arr2
# Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]