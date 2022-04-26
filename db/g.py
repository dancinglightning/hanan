def minCostConnectPoints(points) -> int:
        x = 0
        d = []
        for i in range(len(points)):
            if i not in d:
                y = float("inf")
                k = 0
                for j in range(len(points)):
                    if i!=j:
                        y = min(y, (abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])))
                        k = j
                        print(i , j, y)
                d.append(k)
                print(y)
                x += y
        print(x)
        return x

minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])