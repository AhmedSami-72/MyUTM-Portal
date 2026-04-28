document.addEventListener('DOMContentLoaded', () => {
    // 1) STUDENT DATA
    const studentData = { 
        name: "MOMEN AHMED MOHAMED MOHAMED ALI", 
        matric: "A24KE4027", 
        emailOfficial: "ahmedmohamed.m@graduate.utm.my", 
        emailSecondary: "the.kingmomen@gmail.com", 
        phone: "01125577010", 
        nationality: "Egypt", 
        religion: "Islam",
        entryMode: "-",
        icNo: "202403M10092",
        passportNo: "A35537898",
        dob: "02-02-1999",
        stateOfBirth: "PAL-",
        gender: "L-Male",
        marriageStatus: "1-Single",
        race: "N-Kaum Bukan War. Msia",
        disability: "-"
    };

    // 2) DATA BINDING
    const bindProfileData = () => {
        // Basic Info
        const fields = {
            'fullName': studentData.name,
            'matricNo': studentData.matric,
            'entryMode': studentData.entryMode,
            'icNo': studentData.icNo,
            'passportNo': studentData.passportNo,
            'contactNo': studentData.phone,
            'dob': studentData.dob,
            'stateOfBirth': studentData.stateOfBirth,
            'gender': studentData.gender,
            'marriageStatus': studentData.marriageStatus,
            'nationality': studentData.nationality,
            'race': studentData.race,
            'religion': studentData.religion,
            'disability': studentData.disability,
            'emailOfficial': studentData.emailOfficial,
            'emailSecondary': studentData.emailSecondary
        };

        for (const [id, value] of Object.entries(fields)) {
            const el = document.getElementById(id);
            if (el) el.value = value;
        }

        // Header/Dropdown sync
        document.getElementById('dropdownName').textContent = studentData.name;
        document.getElementById('dropdownEmail').textContent = studentData.emailOfficial;
    };

    bindProfileData();
});