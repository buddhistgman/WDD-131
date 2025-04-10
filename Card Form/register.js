let count = 0;
let fee = 0;
const participantsA = [];
//localStorage.setItem("totalFee", fee);
let totalFee = 0; // Initialize totalFee variable
let adultName = ""; // Initialize adultName variable

Party = document.getElementById("participant");
//Party.innerHTML = `Participant ${count}`;


  document.querySelector("#add").addEventListener("click", function() {
    const firstName = document.getElementById("fname").value.trim();
    const activity = document.getElementById("activity").value.trim();
    const feeInput = document.getElementById("fee").value.trim();
    const date = document.getElementById("date").value.trim();
     adultName = document.getElementById("adult_name").value.trim(); // Get the adult name value
    
    
    
    if (firstName && activity && feeInput && date) {
        
        fee += parseFloat(feeInput); // Convert fee value to a number
        
        // Store the updated fee in localStorage
        //

        document.getElementById("participant").innerHTML = `Participant ${count} & fee $${fee}`;

        const outputString = `${firstName}, ${activity}, $${feeInput}`;
        const outputElement = document.createElement('partyBus');
        outputElement.textContent = outputString;
        //document.querySelector('#participant-list').appendChild(outputElement);

        document.getElementById("fname").value = "";

        document.getElementById("activity").value = "";
        document.getElementById("fee").value = "";
        document.getElementById("date").value = "";

        participantsA.push({
            count: count,
            fname: firstName,
            activity: activity,
            fee: feeInput,
            date: date,
        });
        renderparticipants(participantsA);
        console.log(participantsA);
        count++;
    } else {
        alert("Please fill out all required fields: First Name, Activity, Fee, and Desired Date.");
        }
    });
    function participantTemplate(count) {
        return `<tr>
            <td>${section.count}</td>
            <td>${section.fname}</td>
            <td>${section.activity}</td>
            <td>${section.fee}</td>
            <td>${section.date}</td>
            <td>${section.adultName}</td></tr><br>`;
      }
      
    function renderparticipants(participantsA) {
        const html = participantsA.map(
          (participant) => `<tr>
          <td>${participant.count}</td>
        <td>${participant.fname}</td>
        <td>${participant.activity}</td>
        <td>${participant.fee}</td>
        <td>${participant.date}</td></tr>`
        );
        document.querySelector("#participant").innerHTML = html.join("");
      }
    function submitForm(event) {
        event.preventDefault(); // Prevent form submission
        totalFee = 0; // Reset totalFee for calculation
        for (var i in participantsA) {
            totalFee += parseFloat(participantsA[i].fee); // Assuming fee is a number
        }
        console.log("Total Fee:", totalFee);
        console.log("Form submitted!");
        bigForm.style.display = "none"; // Hide the form after submission
        document.getElementById("summary").innerHTML = `Thank you ${adultName} for registering. You have registered ${count} participants and owe $${totalFee} in fees.`; // Display the total fee
        }
