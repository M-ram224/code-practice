#  Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
arr1 = [3, 7, 10, 5, 4, 3, 3]

arr2 = [7, 8, 2, 3, 1, 5, 4]

#  create a function that takes two arrays
# def combine(arr1, arr2)
# #  add both arrays together then using concantenation method
# combine_arr = arr1.concat(arr2) 
# #  return the uniq function to remove duplicate numbers .uniq needs to be in a block to perform properly
#   combine_arr.uniq
# end

# puts combine arr1, arr2
# Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]


# // Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

# // function that takes in a num as an argument
def add_up(num)
    # local variable going through 1 to ending num, then add up the numbers with .sum
    nums_being_added = (1..num).sum
    
  end
  # addUp = (4)
  puts add_up 4
  # Expected output --> 10
  
  # addUp = (13)
  puts add_up 13
  # Expected output --> 91
  
  # addUp = (600)
  puts add_up 600
  # Expected output --> 180300

  # my original thought on for loops was to set the numbers looped into an array that is then added up.
  # for i in 0..1 do
      # adding each number looped to the given num with .sum

