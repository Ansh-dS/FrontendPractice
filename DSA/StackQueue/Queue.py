from collections import deque

class StackUsingQueues:
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, element):
        if not self.q1:
            self.q1.append(element)
        else:
            while self.q1:
                self.q2.append(self.q1.popleft())
            self.q1.append(element)
            while self.q2:
                self.q1.append(self.q2.popleft())

    def pop(self):
        return self.q1.popleft()


stack = StackUsingQueues()
stack.push(1)
stack.push(2)
stack.push(3)

print("Top element:", stack.pop())  
print("Current size:", len(stack.q1))  
