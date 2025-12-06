def printboard():
    print("0  | 1 | 2")
    print("--|---|---")
    print("3  | 4 | 5")
    print("--|---|---")
    print("6  | 7 | 8")
    pass
if __name__="__main__":
    xstate=[0,0,0,0,0,0,0,0]
    ostate=[0,0,0,0,0,0,0,0]
    turn=1

    print("Welcome to tic tac toe!")
    while (True):
          printboard(xstate,ostate)
        if turn ==1:

    print("X's chance")
    value=int(input("Please enter "))
    xstate[value]=1
        else:
            print("O's chance")
    value=int(input("Please enter "))
    ostate[value]=1
    break



    
  

