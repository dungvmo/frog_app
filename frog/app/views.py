from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import time


@api_view(['POST'])
@permission_classes([AllowAny])
def frog_cross_river(request):
    start_time = time.time()

    step = int(request.data['riverWidth'])
    position_data = request.data['leavesPosition'].strip()
    leaves_pos = [int(x) for x in position_data.split(' ')]

    earliest_time_pos = {}
    for i in range(step):
        earliest_time_pos.update({i + 1: []})
    result = 0
    count_position = 0

    for index, value in enumerate(leaves_pos):
        if 1 <= value <= step:
            if len(earliest_time_pos.get(value)) == 0:
                earliest_time_pos[value].append(index)
                count_position += 1
                if index > result:
                    result = index
        if count_position == step:
            break

    array = ','.join(str(x) for x in leaves_pos[:result + 1])

    message = f'the frog can cross the river at {result}' \
        if count_position == step else 'the frog can not cross the river'
    print('time', time.time() - start_time)
    return Response({'array': array, 'message': message})
