# Makefile for Power Program

CC = gcc        # Compiler
CFLAGS = -g -Wall  # Compilation Flags: debugging (-g) and all warnings (-Wall)
TARGET = power_program  # Target name
SRC = power_program.c   # Source file

# Default target to compile the C program
all: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(CFLAGS) -o $(TARGET) $(SRC)

# Clean command to remove compiled output
clean:
	rm -f $(TARGET)
