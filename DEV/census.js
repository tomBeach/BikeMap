
// == tract geojson data STRUCTUREroperties
:
Object
ALAND: 1913596
AWATER: 0
COUNTYFP: "005"
FUNCSTAT: "S"
GEOID: "24005403100"
INTPTLAT: "+39.3530950"
INTPTLON: "-076.7333148"
MTFCC: "G5020"
NAME: "4031"
NAMELSAD: "Census Tract 4031"
STATEFP: "24"
TRACTCE: "403100"

http://data.fcc.gov/api/block/find?format=json&latitude=28.35975&longitude=-81.421988&showall=true
http://data.fcc.gov/api/block/2010/find?latitude=40.0&longitude=-85


// == geoIDs
• GEOIDs are numeric codes that uniquely identify all administrative/legal and statistical geographic areas for which the Census Bureau tabulates data
• states, counties, congressional districts, core based statistical areas (metropolitan and micropolitan areas), census tracts, block groups and census blocks
• census tracts, block groups and census blocks nest within state and county; therefore, the GEOIDs for each of these geographic areas contains both the state and county FIPS codes, in which they nest.

// == example
the 14-digit “GEO.id” for Harris County, TX is “0500000US48201” where “050” represents the summary level of the data, “0000” represents the geographic component, “US” represents the United States, “48” represents the state of Texas and “201” represents Harris County.

The “GEO.id2” field contains FIPS codes exactly as they appear in the “GEOID” field featured in our TIGER Products. The “GEO.id2” for Harris County, TX is “48201” where “48” represents the state of Texas and “201” represents Harris County. Since the “GEO.id2” field in AFF data matches the “GEOID” field in our TIGER data, the two datasets can easily be joined together to analyze data and create thematic maps.

// == state codes
Virginia: 45
Maryland: 19
District: 08

// ======= boundary url sample =======
state of Illinois: "http://census.ire.org/geo/1.0/boundary-set/states/17"
city of Chicago: "http://census.ire.org/geo/1.0/boundary-set/places/1714000"

// ======= Point queries =======
The fundamental query exposed by the Boundary Service is a point-in-polygon search by latitude and longitude. Here is an example:
"http://census.ire.org/geo/1.0/boundary/?contains=38.948337,-92.328032&sets=tracts,counties"

For any GeoID, it is very simple to create a URL with which you can retrieve a bundle of census data:
    "http://censusdata.ire.org/SS/GEOID.jsonp"
    "http://censusdata.ire.org/02/GEOID.jsonp"
    substitutions:
        SS: The two-digit State FIPS code
        GEOID: The two-to-eleven-digit GEOID.

    function alert_handler(sf1) {
        alert("The 2010 population of "+ sf1['metadata']['NAME'] + " was " + sf1['data']['2010']['P1']['P001001'] + ".");
    }
    function fetch_data(geoid, success_handler) {
        callback = 'geoid_' + geoid;
        url = 'http://censusdata.ire.org/' + geoid.substr(0,2) + '/' + geoid + '.jsonp';
        console.log('calling: ' + url);
        $.ajax(url, {
            dataType: "jsonp",
            jsonpCallback: callback,
            success: success_handler
        });
    }
    fetch_data('1571550',alert_handler);



// ======= sample urls =======
var url = "http://api.census.gov/data/2010/sf1?key=...&get=P0010001,NAME&for=county:001& in=state:06";
var url = "http://api.census.gov/data/2010/sf1?key=YOURKEY&get=P0010001,NAME" + params,
key: "21ff210b5684b96e99d5462e84d09e2cde40920c";
var params = { latLng:null };

// ======= sample ajax =======
$.ajax({
    url: url,
    type: 'GET',
    success: function ( resp ) {
        var values = resp[ 1 ];
        var pop  = values[ 0 ];
        var name = values[ 1 ];
        var FIPS = values[ 2 ];
        if ( values.length == 3 )
            $("#state-name").text( name );
        else
            $("#county-name").text( name );
            $("#pop").text( pop );
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('GET failed.');
        }
});





Below are a few example commonly used values of CATEGORY

P0010001             - total population
P0080003             - total population for Whites
P0080004             - total population for Blacks
P0080006             - total population for Asians
H00010001          - total housing units
H0100001             – total occupied housing units
NAME                   - return the name of the geographic entity


GEOGRAPHY may be any one of the following, where ‘*’ means match all and FIPS the associated FIPS number the geographic locality:

                state: * or FIPS
                county:* or FIPS
                place:* or FIPS
              county+subdivision:* or FIPS
                subminor+civil+subdivision:* or FIPS
                block:* or FIPS
                tract:* or FIPS
                congressional+district:* or FIPS
                zip+code+tabulation+area: * or FIPS

The API returns its responses in JSON format. Below is an example response from the above example invocation:

[["P0010001","NAME","state"], ["3831074","Oregon","41"]]

// ======= inputs =======
State FIPS: <input type="text" id="S_FIPS" />
County FIPS: <input type="text" id="C_FIPS" />
<button id="search">Search</button><br/>
State: <span id="state-name"></span></br/>
County: <span id="county-name"></span><br/>
Pop:  <span id="pop"></span></br/>

// ======= variables =======
101	state-county-tract-block
http://api.census.gov/data/2010/sf1?get=P0010001&for=block:1213&in=state:02+county:290+tract:00100
http://api.census.gov/data/2010/sf1?get=P0010001&for=block:*&in=state:02+county:290+tract:00100

140	state-county-tract
http://api.census.gov/data/2010/sf1?get=P0010001&for=tract:000101&in=state:02+county:170
http://api.census.gov/data/2010/sf1?get=P0010001&for=tract:*&in=state:02+county:170
http://api.census.gov/data/2010/sf1?get=P0010001&for=tract:*&in=state:02

150	state-county-tract-block group
http://api.census.gov/data/2010/sf1?get=P0010001&for=block+group:1&in=state:02+county:170+tract:000101
http://api.census.gov/data/2010/sf1?get=P0010001&for=block+group:*&in=state:02+county:170+tract:000101
http://api.census.gov/data/2010/sf1?get=P0010001&for=block+group:*&in=state:02+county:170

500	state-congressional district
http://api.census.gov/data/2010/sf1?get=P0010001&for=congressional+district:01&in=state:24
http://api.census.gov/data/2010/sf1?get=P0010001&for=congressional+district:*&in=state:24

510	state-congressional district-county
http://api.census.gov/data/2010/sf1?get=P0010001&for=county:003&in=state:24+congressional+district:01
http://api.census.gov/data/2010/sf1?get=P0010001&for=county:*&in=state:24+congressional+district:01


511	state-congressional district-county-tract
http://api.census.gov/data/2010/sf1?get=P0010001&for=tract:702100&in=state:24+congressional+district:01+county:003
http://api.census.gov/data/2010/sf1?get=P0010001&for=tract:*&in=state:24+congressional+district:01+county:003

871	state-zip code tabulation area
http://api.census.gov/data/2010/sf1?get=P0010001&for=zip+code+tabulation+area:99501&in=state:02
http://api.census.gov/data/2010/sf1?get=P0010001&for=zip+code+tabulation+area:*&in=state:02

// ======= American Community Survey API (acs) =======
010	us
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=us:1
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=us:*

020	region
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=region:2
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=region:*

030	division
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=division:1
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=division:*

040	state
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=state:01
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=state:*

140	state-county-tract
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=tract:000101&in=state:02+county:170
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=tract:*&in=state:02+county:170
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=tract:*&in=state:02

150	state-county-tract-block group
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=block+group:1&in=state:02+county:170+tract:000101
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=block+group:*&in=state:02+county:170+tract:000101
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=block+group:*&in=state:02+county:170

330	combined statistical area
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=combined+statistical+area:102
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=combined+statistical+area:*

340	state-combined statistical area
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=combined+statistical+area:122&in=state:01
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=combined+statistical+area:*&in=state:01

400	urban area
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=urban+area:00037
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=urban+area:*

500	state-congressional district
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=congressional+district:01&in=state:24
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=congressional+district:*&in=state:24
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=congressional+district:*

510	state-congressional district-county	http://api.census.gov/data/2011/acs5?get=B00001_001E&for=county:003&in=state:01+congressional+district:01
http://api.census.gov/data/2011/acs5?get=B00001_001E&for=county:*&in=state:01+congressional+district:01


format of a request
syntax is identical to the Census API except the URL component ‘sf1’ is replaced with ‘acsN/profile’.
http://api.census.gov/data/2010/acs5/profile?key=...&get=CATEGORY&for=GEOGRAPHY[&in=GEOGRAPHY2]

    CATEGORY          - Identifies the requested category of census data.
    GEOGRAPHY      - Specifies the geographic location to obtain data for (e.g., place, county, state).
    GEOGRAPHY2    - Specifies the outer geographic location (e.g., count, state) that contains the geographic location (e.g., place) to obtain data on.

examples used values of CATEGORY:

    DP02_0001PE     - Total Households
    DP02_0004E       - total Married-Family Households
    DP02_0025E       - Married
    DP02_0049E       - Grandparents taking care of grandchildren

example invocation, where … is replaced with your application key
for: individuals whose Gross Rent as a Percentage of Household Income is between 10 and 14.9 Percent
    state of California:

http://api.census.gov/data/2011/acs5?get= B25070_003E,NAME&for=state:06&key=…


// ======= data granularity =======
LIVING QUARTERS___________________________________________________ 7
HOUSING UNIT _______________________________________________________ 7
GROUP QUARTERS ____________________________________________________ 8

HOUSING VARIABLES _______________________________________________ 11
ACREAGE (CUERDA) _________________________________________________ 11
AGRICULTURAL SALES________________________________________________ 11
BEDROOMS _________________________________________________________ 12
BUSINESS ON PROPERTY ______________________________________________ 13
COMPUTER AND INTERNET USE_________________________________________ 13
CONDOMINIUM STATUS AND FEE _______________________________________ 15
CONTRACT RENT ____________________________________________________ 16
FOOD STAMP/SUPPLEMENTAL NUTRITION ASSISTANCE PROGRAM BENEFITS____ 18
(SNAP) ____________________________________________________________ 18
GROSS RENT________________________________________________________ 19
GROSS RENT AS A PERCENTAGE OF HOUSEHOLD INCOME ___________________ 20
HOMEOWNER VACANCY RATE _________________________________________ 20
HOUSE HEATING FUEL________________________________________________ 21
HOUSEHOLD SIZE____________________________________________________ 22
HOUSING UNITS _____________________________________________________ 22
INSURANCE FOR FIRE, HAZARD, AND FLOOD ______________________________ 22
INTERNET USE ______________________________________________________ 23
KITCHEN FACILITIES _________________________________________________ 23
MEALS INCLUDED IN RENT ____________________________________________ 24
MOBILE HOME COSTS ________________________________________________ 24
MONTHLY HOUSING COSTS____________________________________________ 25
MONTHLY HOUSING COSTS AS A PERCENTAGE OF HOUSEHOLD INCOME _______ 25
MORTGAGE PAYMENT ________________________________________________ 26
MORTGAGE STATUS __________________________________________________ 27
OCCUPANTS PER ROOM_______________________________________________ 27
OCCUPIED HOUSING UNITS ____________________________________________ 28
OWNER-OCCUPIED UNITS _____________________________________________ 28
PLUMBING FACILITIES ________________________________________________ 28
POPULATION IN OCCUPIED HOUSING UNITS_______________________________ 29
POVERTY STATUS OF HOUSEHOLDS _____________________________________ 29
REAL ESTATE TAXES _________________________________________________ 30
RENT ASKED________________________________________________________ 30
RENTAL VACANCY RATE ______________________________________________ 30
RENTER-OCCUPIED HOUSING UNITS ____________________________________ 31
ROOMS ____________________________________________________________ 31
SECOND OR JUNIOR MORTGAGE PAYMENTS OR HOME EQUITY LOAN__________ 32
SELECTED CONDITIONS _______________________________________________ 33
SELECTED MONTHLY OWNER COSTS ____________________________________ 33
SELECTED MONTHLY OWNER COSTS AS A PERCENTAGE OF HOUSEHOLD INCOME 34
SPECIFIED OWNER-OCCUPIED UNITS ____________________________________ 35
SPECIFIED RENTER-OCCUPIED UNITS____________________________________ 36
TELEPHONE SERVICE AVAILABLE_______________________________________ 36
TENURE____________________________________________________________ 37
UNITS IN STRUCTURE _________________________________________________ 38
UTILITIES __________________________________________________________ 39
VACANCY STATUS ___________________________________________________ 40
VACANT – CURRENT RESIDENCE ELSEWHERE _____________________________ 42
VACANT HOUSING UNITS______________________________________________ 42
VALUE_____________________________________________________________ 42
VEHICLES AVAILABLE ________________________________________________ 44
YEAR HOUSEHOLDER MOVED INTO UNIT_________________________________ 44
YEAR STRUCTURE BUILT______________________________________________ 45

POPULATION VARIABLES ___________________________________________ 47
ABILITY TO SPEAK ENGLISH ___________________________________________ 47
AGE _______________________________________________________________ 48
ANCESTRY _________________________________________________________ 50
CHILDREN EVER BORN _______________________________________________ 53
CITIZENSHIP STATUS (U.S. CITIZENSHIP STATUS) __________________________ 54
CLASS OF WORKER __________________________________________________ 56
DISABILITY STATUS __________________________________________________ 58
EDUCATIONAL ATTAINMENT___________________________________________ 61
EMPLOYMENT STATUS ________________________________________________ 63
FAMILIES __________________________________________________________ 67
FERTILITY__________________________________________________________ 67
FIELD OF DEGREE ___________________________________________________ 68
FOREIGN-BORN POPULATION __________________________________________ 69
FOSTER CHILDREN___________________________________________________ 69
GRADE IN WHICH ENROLLED __________________________________________ 69
GRANDPARENTS AS CAREGIVERS _______________________________________ 69
GROUP QUARTERS (GQ) ______________________________________________ 70
HEALTH INSURANCE COVERAGE________________________________________ 70
HISPANIC OR LATINO ORIGIN __________________________________________ 73
HOUSEHOLD ________________________________________________________ 74
HOUSEHOLD TYPE AND RELATIONSHIP __________________________________ 74
HOUSEHOLD SIZE____________________________________________________ 79
HOUSEHOLDER ______________________________________________________ 79
IMMIGRANTS________________________________________________________ 79
INCOME IN THE PAST 12 MONTHS _______________________________________ 80
INDUSTRY __________________________________________________________ 87
JOURNEY TO WORK __________________________________________________ 90
LABOR FORCE STATUS________________________________________________ 95
LANGUAGE SPOKEN AT HOME__________________________________________ 95
MARITAL STATUS/MARITAL HISTORY ___________________________________ 97
MEANS OF TRANSPORTATION TO WORK _________________________________ 99
MIGRATION ________________________________________________________ 99
NATIVE POPULATION _________________________________________________ 99
NATIVITY _________________________________________________________ 100
NATIVITY OF PARENT________________________________________________ 100
OCCUPATION ______________________________________________________ 100
OWN CHILDREN ____________________________________________________ 103
PERIOD OF MILITARY SERVICE________________________________________ 103
PERSONS IN FAMILY_________________________________________________ 103
PERSONS IN HOUSEHOLD _____________________________________________ 103
PLACE OF BIRTH____________________________________________________ 103
PLACE OF WORK ___________________________________________________ 104
POVERTY STATUS IN THE PAST 12 MONTHS ______________________________ 104
PRIVATE VEHICLE OCCUPANCY _______________________________________ 107
RACE_____________________________________________________________ 108
REFERENCE WEEK__________________________________________________ 116
RELATIVES AND NONRELATIVES _______________________________________ 116
RESIDENCE 1 YEAR AGO _____________________________________________ 116
SCHOOL ENROLLMENT AND TYPE OF SCHOOL____________________________ 118
SEX ______________________________________________________________ 120
SOCIAL SECURITY INCOME ___________________________________________ 122
SUBFAMILY ________________________________________________________ 122
TIME LEAVING HOME TO GO TO WORK_________________________________ 122
TRAVEL TIME TO WORK _____________________________________________ 122
TYPE OF SCHOOL ___________________________________________________ 122
USUAL HOURS WORKED IN THE PAST 12 MONTHS ________________________ 122
VETERAN STATUS___________________________________________________ 122
WEEKS WORKED IN THE PAST 12 MONTHS ______________________________ 127
WORK EXPERIENCE _________________________________________________ 127
WORK STATUS IN THE PAST 12 MONTHS ________________________________ 129
YEAR OF ENTRY ____________________________________________________ 129
DERIVED MEASURES_______________________________________________ 131
AGGREGATE _______________________________________________________ 131
AVERAGE _________________________________________________________ 131
GINI INDEX ________________________________________________________ 131
INTERPOLATION ____________________________________________________ 131
MEAN ____________________________________________________________ 131
MEDIAN___________________________________________________________ 133
PERCENTAGE ______________________________________________________ 133
QUARTILE_________________________________________________________ 134
QUINTILE _________________________________________________________ 134
RATE _____________________________________________________________ 134
RATIO ____________________________________________________________ 134

QUALITY MEASURES_______________________________________________ 135
GENERAL INFORMATION _____________________________________________ 135
SAMPLE SIZE ______________________________________________________ 135
COVERAGE RATES __________________________________________________ 136
RESPONSE RATES ___________________________________________________ 136
IMPUTATION RATES _________________________________________________ 137
