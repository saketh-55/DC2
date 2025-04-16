// Information about painting components
const paintingData = {
    Ravan: {
        title: "Ravan",
        description: "Ravana in the Pabu epic is often viewed as a counter-protagonist. Over time, due to Sanskritization, this character is sometimes identified with the Demon King of the Ramayana. However, historical sources suggest that Ravana in the Pabu narrative may have been a local ruler, not the same as the one from Valmiki's Ramayana. Some accounts point to him being a neighboring king from Mandore, near Jodhpur. This interpretation aligns with regional legends and local histories, offering a distinct cultural perspective on the rivalry between Pabu and Ravana.",
        audio: "Ravan.mp3"
    },
    Umarkot: {
        title: "Umarkot Sodan",
        description: "The Sodhos are a ruling clan from Umarkot in Sindh, aka Umarkot Sodhan, initially a peripheral part of Pabu’s story. Pabu passes through their kingdom on his adventures, but they soon become significant allies when Princess Phulvanti of the Sodho clan falls in love with him and requests his hand in marriage. This alliance through marriage links the Sodhos with Pabu’s Kolu court, strengthening their ties and marking a key moment in Pabu’s journey.",
        audio: "umarkot.mp3"
    },
    Pabuji: {
        title: "Pabuji",
        description: "Pabu (or Pabu Ji, with the respectful suffix \"-ji\" commonly used in India), a semi-mythical prince born around 1239 AD in Kolumand near Phalodi (Jodhpur), is remembered not for his rule but for his devotion to protecting animals, especially livestock. The son of King Buro and a celestial nymph, his story blends history, myth, and spirituality. As ruler of Kolumand, Pabuji was renowned for his care for animals, a value cherished by Rajasthan’s pastoral communities. His ultimate sacrifice to defend his kingdom’s livestock is said to have elevated him to divine status. Pabuji is celebrated as a protector deity, particularly by those who depend on cattle and camels. His legacy reflects Rajasthan’s values of loyalty, sacrifice, and harmony with nature, securing his place as an enduring symbol of protection and reverence.",
        audio: "pabuji.mp3"
    },
    Ramdev: {
        title: "Ramdev",
        description: "Baba Ramdev is a beloved local deity of Rajasthan, revered by numerous communities. A semi-mythical figure, he was a 15th-century Rajput ruler of the Tanwar dynasty, governing the region of Runicha near Pokaran. In the Pabuji epic, Baba Ramdev appears as a wandering Yogi and a key advisor to Roop, guiding him on his quest for family and revenge. He also attends Pabu's wedding as an honored guest, symbolizing his important role in the narrative and his spiritual influence in Rajasthan's folklore.",
        audio: "Ramdev.mp3"
    },
    Chando: {
        title: "Chando",
        description: "Chando, one of Pabu’s loyal ministers and Dhebo’s brother, stands out not through appearance but intellect. Modest in stature, clean-shaven, with a thin mustache and dressed in simple white, he might seem ordinary at first glance. But Chando’s true strength lies in his wisdom. As the court’s scribe and keeper of records, he is highly educated, skilled in reading, writing, and preserving the kingdom’s knowledge. A trusted messenger, Chando embodies quiet intelligence and thoughtfulness, proving that strength isn’t always about physical might—it’s also about the power of the mind.",
        audio: "Chando.mp3"
    },
    Demaji: {
        title: "Dhemaji",
        description: "Dhebo (also called Dhema), one of Pabu’s four loyal ministers, stands out for his unmatched loyalty and raw physical strength. Each of Pabu’s ministers has a unique quality that complements the others, and Dhema’s defining traits are his devotion and readiness to sacrifice anything for his master. He is a symbol of unshakable dedication, with his immense strength taking center stage in stories about him. A striking example of this is when he consumes opium, an act that highlights both his fearless nature and his unwavering willingness to serve Pabu, no matter the cost.",
        audio: "Dhema.mp3"
    },
    Saliji: {
        title: "Salji",
        description: "Salji, one of Pabu’s four ministers, is a mystical seer gifted with the power to read minds and foresee the future. His striking light green eyes and vibrant yellow attire set him apart, radiating an aura of wisdom and mystery. With his magical sight, Salji often intervenes at critical moments, saving the kingdom from unseen threats. His presence at court symbolizes the importance of foresight and intuition in navigating challenges.",
        audio: "Salji.mp3"
    },
    Harmal: {
        title: "Harmal",
        description: "Harmal, one of Pabu’s four trusted ministers, stands out as the clever strategist of the group. A herdsman dressed in green, he embodies wit, pragmatism, and loyalty. Harmal’s sharp mind and quick thinking are legendary, often showcased in tales where he uses ingenious disguises to support Pabu’s missions. With a blend of strength, humor, and humility, he underscores the value of strategy and selflessness, making him an indispensable figure in the heroic adventures of Pabuji.",
        audio: "Harmal.mp3"
    },
    Roopnath: {
        title: "Roopnath",
        description: "Roop (or Roop Nath, because of his affiliation with yogic practices), is Pabu’s nephew, the son of Pabu's brother, Buro, and his wife, Gailovat. After a fierce battle between the Kichis and Pabu's army, Roop is the only one left alive, hiding during his childhood to survive as the last of his family and lineage. Driven by a strong sense of duty and revenge, Roop dedicates himself to avenging his uncle Pabu and the entire family. His story is one of survival, honor, and the endurance of lineage, where the need to uphold family legacy intertwines with themes of justice and devotion.",
        audio: "Roopnath.mp3",
        music: "Music_roop.mp3",
        musicLabel: "Special Roopnath Music"
    },
    Bhati: {
        title: "Bhati Court",
        description: "The Bhati court, located in present-day Jaisalmer, plays a pivotal role in the Pabuji epic. King Jaisingh Bhati forms an alliance with the Khinchis to steal Deval's cattle, setting the stage for Pabu's final battle. This betrayal leads to a chain of events that culminate in a dramatic confrontation, highlighting themes of loyalty, conflict, and revenge within the epic.",
        audio: "Bhati.mp3"
    },
    Mirza: {
        title: "Mirza Khan",
        description: "Mirza Khan, the ruler of Patan, serves as a key antagonist in Pabuji's tales. Representing oppressive forces, he is portrayed as a tyrant responsible for cow slaughter but also as someone who upholds honor by pursuing blood-feuds (vair). His conflict with Pabu reflects themes of justice, moral leadership, and the protection of women and livestock, core values in Pabuji's legend. In a moment of redemption, Mirza Khan bathes in the sacred lake of Pushkar to cleanse himself of the sins of bloodshed, adding complexity to his character.",
        audio: "Mirza.mp3"
    },
    Gujao: {
        title: "The Gujao's Well",
        description: "Gunjavo’s Well: In the final war of the Pabuji epic, the satis—the wives of Pabu’s warriors—head towards Gunjavo well to commit suicide in honor of their fallen husbands. Among them is Gailovat, the wife of Buro, Pabu’s brother, who is seven months pregnant. Determined to join the satis, she requests a Caesarean section from the midwife, who refuses. Taking matters into her own hands, Gailovat performs the surgery herself and makes a prophecy about her unborn son. She predicts that her child, Roop, will avenge the death of their family. This poignant moment ties themes of sacrifice, prophecy, and vengeance into the epic’s narrative.",
        audio: "Gujao.mp3"
    },
    Sati: {
        title: "Sati",
        description: "Sati: In the Pabuji epic, when warriors die on the battlefield, their wives often choose to join them in an act of honor, known as sati. This form of voluntary suicide reflects the devotion and loyalty of women in the face of their husbands' deaths. Several satis occur throughout the story, but the most significant takes place during the final battle with the Khinchi, where the entire Kolu clan perishes. In this dramatic moment, all the men and women of the clan choose to sacrifice themselves, with the exception of Roop, Pabu's nephew, who is saved by his mother. This event marks the tragic end of the Kolu clan and underscores the themes of sacrifice and devotion woven throughout the narrative.",
        audio: "Sati.mp3"
    },
    Deval: {
        title: "Deval",
        description: "Deval is one of the central female figures in the Pabuji epic, a powerful leader and skilled cattle herder. As an incarnation of the goddess Hinglaj, she embodies both divine and human qualities, capable of transforming into animals to aid in travel. Her loyalty to Pabuji is unwavering, always by his side as a trusted advisor and sisterly figure. Deval's dual role as a spiritual guide and political advisor underscores the blend of the divine and earthly in the narrative, with her mission ensuring that Pabuji fulfills his sacred duties.",
        audio: "Deval.mp3"
    },
    Kesar: {
        title: "Kesar Kalmi",
        description: "Kesar Kalmi, Pabuji’s celestial mother, is a divine nymph who takes on various forms throughout his story. She appears as a human, a tigress, and ultimately as an elegant Marwari mare when Pabu reaches young adulthood. In her equine form, she becomes his loyal companion, guiding and protecting him through his adventures. Even in their final battle against the Khinchis, Kesar Kalmi safeguards her son, ensuring his transcendence to the celestial realm after his mortal end. Her transformations symbolize unwavering maternal devotion and the divine bond between mother and child.",
        audio: "Kesar.mp3",
        music: "Music_Kesar.mp3",
        musicLabel: "Special Kesar Music"
    },
    Harmal_Jogi: {
        title: "Harmal Jogi",
        description: "Harmal Jogi: One of the most famous stories features Harmal transforming into a Jogi, or ascetic, to infiltrate enemy territory. Disguised and unnoticed, he gathers crucial intelligence about the camels’ positions in Lanka, showcasing his cunning and resourcefulness.",
        audio: "Harmal_Jogi.mp3"
    },
    Wedding: {
        title: "Pabuji's Wedding",
        description: "Pabuji was initially reluctant to marry, as his primary focus was on protecting cattle and his adventures. However, when the King of Umarkot in Sindh proposed a marriage to Pabu on behalf of his daughter, Phulvanti, Pabu reluctantly agreed. The princess had fallen in love with Pabu, and despite his reservations, he eventually accepted the proposal. However, he delayed the journey by demanding saffron to dye the clothes of his wedding procession, which sparked a war with Lakkhu Pathan, the saffron owner. After the battle, Pabu set off for Umarkot, but Deval, whom he had promised to protect, tried to convince him to stay or leave some men behind. Pabu, however, insisted that he would come immediately if she needed him, even during the wedding. As they journeyed, ominous signs, including a tiger killed by Dhebo, appeared, but they continued to Umarkot, where preparations for the wedding were underway. Just before the ceremony, Deval arrived in the form of a bird, bringing the news that Khinchi had stolen her cattle, setting the stage for further conflict.",
        audio: "Wedding.mp3",
        music: "Music_wedding.mp3",
        musicLabel: "Special Wedding Music"
    }
};

// Show popup with content
function showPopup(component) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    const audio = document.getElementById('popup-audio');
    const musicContainer = document.getElementById('popup-music-container');

    const data = paintingData[component];

    // Set main content
    title.textContent = data.title;
    description.textContent = data.description;
    audio.src = data.audio;
    audio.load();

    // Clear any previous music content
    musicContainer.innerHTML = '';

    // If music exists (only for Kesar), add the heading and audio
    if (data.music) {
        const label = document.createElement('p');
        label.innerHTML = `<strong>${data.musicLabel || "Special Music"}:</strong>`;

        const specialMusic = document.createElement('audio');
        specialMusic.setAttribute('controls', '');
        specialMusic.src = data.music;

        musicContainer.appendChild(label);
        musicContainer.appendChild(specialMusic);
    }

    popup.style.display = 'flex';
}

// Close popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-audio').pause();
}
