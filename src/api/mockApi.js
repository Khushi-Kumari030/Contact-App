export const getContacts = async () => {
  // Simulate fetching 20 contacts with Indian names
  const contacts = [];
  const indianNames = [
    "Aarav Sharma", "Priya Singh", "Rohan Patel", "Ananya Iyer", "Karan Mehta",
    "Sneha Reddy", "Rahul Nair", "Isha Gupta", "Aditya Verma", "Neha Das",
    "Ravi Joshi", "Meera Pillai", "Arjun Desai", "Pooja Bhatt", "Sahil Khan",
    "Kavya Menon", "Vikram Rao", "Simran Kaur", "Deepak Yadav", "Ritika Sharma"
  ];

  for (let i = 0; i < 20; i++) {
    const name = indianNames[i];
    contacts.push({
      id: Date.now() + i,
      name,
      phone: `+91 90000${1000 + i}`,
      email: `${name.toLowerCase().replace(/ /g, ".")}@example.com`,
      // randomuser.me provides different male/female pics
      photo: i % 2 === 0 
        ? `https://randomuser.me/api/portraits/men/${i + 10}.jpg` 
        : `https://randomuser.me/api/portraits/women/${i + 10}.jpg`
    });
  }

  return contacts;
};
