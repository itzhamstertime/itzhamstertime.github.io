from PIL import Image, ImageDraw

def create_grid_image(output_file, size=128, grid_color=(0, 0, 0), background_color=(255, 255, 255)):
    """
    Create a grid image.
    
    :param output_file: The file to save the image to.
    :param size: The size of the image (width and height).
    :param grid_color: The color of the grid lines.
    :param background_color: The background color of the image.
    """
    # Create a new image with a white background
    image = Image.new("RGB", (size, size), background_color)
    draw = ImageDraw.Draw(image)
    
    # Draw the grid lines
    for x in range(0, size, 16):
        draw.line((x, 0, x, size), fill=grid_color)
    for y in range(0, size, 16):
        draw.line((0, y, size, y), fill=grid_color)
    
    # Save the image
    image.save(output_file)

# Create a 128x128 pixel grid image
create_grid_image("grid_image.png")
