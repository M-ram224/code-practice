class Shape
    NOT_IMPLEMENTED = 'Method not implemented'
    attr_reader :area, :sides
    
    def initialize(sides)
      @sides = sides
    end
    
    def set_area
      raise NOT_IMPLEMENTED
    end
  end
  
  class Triangle < Shape
    attr_reader :length, :width
  
    def initialize(sides, length, width)
      super(sides)
      @length = length
      @width = width
    end
  
    def set_area
      @area = (length * width) / 2
    end
  end
  
  class Rectangle < Shape
    # area == length * width
    attr_reader :length, :width
    
    def initialize(sides, length, width)
      super(sides)
      @length = length
      @width = width
    end
    
    def set_area
      @area = length * width
    end
  end
  
  class Circle
    # area == 3.14 * (radius * radius)
      attr_reader :area, :radius
    
    def initialize(area, radius)
      @area = area
      @radius = radius
    end
    
    def set_area(radius)
        @area = 3.14 * (radius * radius)
    end
  
    def sides
      "Circles don't have sides!"
    end
  end
  
  
  # Execution
  shape = Shape.new(4)
  triangle = Triangle.new(3, 4, 2)
  rectangle = Rectangle.new(4, 3, 5)
  circle = Circle.new(2.5)
  
  [triangle, rectangle, circle, shape].each do |shape_instance|
    shape_instance.set_area
    
    puts shape_instance.sides
    puts shape_instance.area
  end
  
  # Shape output
  #  3 
  #
  # Triangle output
  #  @area = 4
  #
  # Rectangle output
  #  @area = 4
  #
  # Circle output
  #  @area = 15
  #