import requests

url = "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch"

querystring = {"location":"95616","home_type":"Houses"}

headers = {
	"X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
	"X-RapidAPI-Key": "d4402e9e41msh5b1542100c7d8ecp18553bjsn9e18327b8d37"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)