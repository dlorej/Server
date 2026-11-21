import requests

url = "https://servertest-sooty.vercel.app/api/hello"

response = requests.post(url, json={
    "name": "John",
    "order_id": 123
})

print(response.json())