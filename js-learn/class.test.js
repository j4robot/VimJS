class School{
    constructor(id, name, location, year){
        this.id = id;
        this.name = name;
        this.location = location;
        this.year = year;
    }

    rateSchool(year){
        return ((year >= 1900 && year <= 1949) ? '3' : (year >= 1950 && year <= 1999) ? '2' : (year >= 2000 && year <= new Date().getFullYear()) ? '1' : '0') + 'Star Rating';
    }

}