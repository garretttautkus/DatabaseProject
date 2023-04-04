CREATE VIEW current_user_organization AS
SELECT OName, OEmail, OCity, OPhone
FROM Organization
WHERE OEmail = (
    SELECT LoggedInOrgEmail FROM Sessions WHERE SessionID = :session_id
);

CREATE VIEW meeting_information AS
SELECT CName, CAttendance, CStartDate, CEndDate, HName, HState, HCity, HZip, HAddress
FROM Organization, Conference, Hotel
WHERE OEmail = (
    SELECT LoggedInOrgEmail FROM Sessions WHERE SessionID = :session_id
);