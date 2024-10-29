

import redis
import json

# Initialize Redis client (make sure to adjust the settings)
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

def get_redis_data(user_id):
    """Fetch user data from Redis."""
    data = redis_client.get(user_id)
    if data:
        return json.loads(data)
    return None

def set_redis_data(user_id, data):
    """Set user data in Redis."""
    redis_client.set(user_id, json.dumps(data))

def delete_redis_data(user_id):
    """Delete user data from Redis."""
    return redis_client.delete(user_id)
