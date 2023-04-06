CREATE VIEW current_user_organization AS
SELECT OName, OEmail, OCity, OPhone
FROM Organization;

CREATE VIEW meeting_information AS
SELECT CName, CAttendance, CStartDate, CEndDate, hotel.HName, HState, HCity, HZip, HAddress
FROM Organization, Conference , Hotel;

