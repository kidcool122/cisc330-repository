#include <iostream>
#include <stdexcept>

int main() {
    try {
        int expectedValue = 10;
        int actualValue = 5; 

        if (actualValue != expectedValue) {
            throw std::runtime_error("Error: The actual value does not match the expected value.");
        }

        std::cout << "Values match!" << std::endl;

    } catch (const std::runtime_error& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }

    return 0;
}
