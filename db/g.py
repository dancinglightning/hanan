def minCostConnectPoints(points) -> int:
        x = 0
        d = []
        for i in range(len(points)):
            y = float("inf")
            k = 0
            for j in range(len(points)):
                if  [i, j] in d or [j, i] in d:
                    y = 0
                    k = j
                elif i!=j and y>(abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])):
                    y = (abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]))
                    k = j
            d.append([i, k])
            print(i, k, y)
            if y!=float("inf"):
                x += y
        print(x)
        return x

minCostConnectPoints([[0,0],[1,1],[1,0],[-1,1]])