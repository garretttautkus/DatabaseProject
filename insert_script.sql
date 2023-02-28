--Organization 
INSERT INTO ORGANIZATION (OName, OAddress, OCity, OState, OZip, OEmail, OPhone) VALUES ('Super Incorporated', '109 N 100 W', 'Provo', 'Utah', 84663, 'super_incorporated@gmail.com', '8018889011');
INSERT INTO ORGANIZATION (OName, OAddress, OCity, OState, OZip, OEmail, OPhone) VALUES ('Pigeons United', '222 N 222 W', 'Rexburg', 'Idaho', 83646, 'we_are_pigeons66@gmail.com', '2082222222');


--Hotel 
INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (100, 'Hilton Hotel Missoula', 'Montana', 59901, '100 Madison St, Missoula, MT 59802', '4067283100', '4067283198', 200, 'Missoula');
INSERT INTO HOTEL (HMaxMeetSize, HName, HState, HZip, HAddress, HContactPhone, HPhone, HNumRooms, HCity) VALUES (10000, 'Hotel California', 'California', 90001, '3832 Warbler St, Los Angeles, CA 90001', '4001002000', '3105432189', 500, 'Los Angeles');


--Conference
INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('IPOAC Year in Review', '2023-02-28', '2023-02-29', 'Missoula', 25, 95, 2000, 'Hilton Hotel Missoula');
INSERT INTO CONFERENCE (CName, CStartDate, CEndDate, CCity, CFee, CAttendance, CBudget, HName) VALUES ('Uprising of the Avians', '2023-02-28', '2023-02-29', 'Los Angeles', 25, 95, 2000, 'Hotel California');


--Attendee
INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Paul Bunyan', 649100200, 10, 'paul_bunyan@yahoo.com', 5, 'Hilton Hotel Missoula');
INSERT INTO ATTENDEE (AName, APhone, ADiscount, AEmail, AFeePaid, HName) VALUES ('Acanthis', 9991006542, 40, 'godofpigeons@pigeon.com', 0, 'Hotel California');
