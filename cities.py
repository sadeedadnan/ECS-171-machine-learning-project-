import os
import csv
from dotenv import load_dotenv
from opencage.geocoder import OpenCageGeocode


load_dotenv()

api_key = os.environ["GEO_CODER_API"]

geocoder = OpenCageGeocode(api_key)

def getCities():
    cities = []
    with open("cities.txt", "r") as fp:
        city = fp.read()
        while city:
            cities.append(city)
            city = fp.read()


    cities = cities[0].split('\n')
    cities.pop(-1)     
    cities.sort()

    cities_coord = []

    print("****************")
    for city in cities:
        query = f"{city}, CA"
        results = geocoder.geocode(query)
        lat = results[0]['geometry']['lat']
        lng = results[0]['geometry']['lng']
        row = {"City": city, "Latitude": lat, "Longitude": lng}
        cities_coord.append(row)

    col_name = ["City", "Latitude", "Longitude"]

    with open('cities_coord.csv', 'w') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=col_name)
        writer.writeheader()
        writer.writerows(cities_coord)

def getCoord(city):
    print(city)
    query = f"{city}, CA"
    result = geocoder.geocode(query)
    lat = result[0]['geometry']['lat']
    long = result[0]['geometry']['lng']
    return lat, long
