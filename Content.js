const ALL_IMAGES = ["https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/272275517_1510541109369679_2331963208853402816_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=Qm59iAREBkYAX9MG6oz&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-OE14fNWK1rKmIXcryJtfeMXa2zJqVyWf4IB9CaKPwIA&oe=622BC92B", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/267830600_1486514478439009_4575785160305921556_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=0M3uknLEQckAX-gtNPs&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-PbK6VTKHmHgZrF8WZMcR-rNg3lN9B2db3HD5fAd5Yiw&oe=622C4E38", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/187824963_1342131486210643_6044545369911930397_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=O1M924eliYIAX-NP1Fj&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8Js6hP0TOXde0144Kp4kJdtFF5YL_TiA2Pg7V3Vyr2Nw&oe=624DEA72", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/155049843_1278686719221787_4325427851941800889_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=iOKu2Y9INlMAX9Lorwt&tn=BM3YsHxujHpO_fF9&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-1JVB4KOgs-zN5abIndi2kxzgonG_x6Zz0Q5gwqszuDg&oe=624CFB6B", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/132443876_1225156304574829_4565847045609358636_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_yfD4DJnQjUAX_P4YLe&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9SiFYzGaFCpiaVRYFtkxB7fI2S3eyo1w96XRry9BbkoA&oe=624D301D", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/131669572_1225154191241707_2901188225734334730_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=ds6Elu8bxUgAX-pi9GU&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-qOp1nB_a0PkTSNfSFNEcYCAloxMLjFgjqQsJbJ4k2RA&oe=624D879C", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/122184362_1160435491046911_5929508422167231644_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=WpbRc3T0t0kAX8gbeKw&tn=BM3YsHxujHpO_fF9&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_eaoY1B1Ls6r9hhlVSQcFx6UQZXJNp6UrB7d0s4YlQBw&oe=624B4DD6", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/77163036_800772187013245_7282414481148215296_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=t2i0MBDdHGIAX8DK7Fe&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_-vGBYVNbDclgBX7burhuIe_I_GCyyOx_dXAk6HaMXmA&oe=624F212D", "https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/59471634_667398093683989_7891864671093784576_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=OQjpY_b82UMAX-zOqul&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8LNwaqEqoyegG0PZBjG2QQQZppiU01XK4kwvqiGV76eA&oe=624CA4DA"];

const imgs = document.getElementsByTagName('img');

for (let x = 0; x < imgs.length; x++) {
    const randomImgs = Math.floor(Math.random() * ALL_IMAGES.length);

    imgs[x].src = ALL_IMAGES[randomImgs];
}

const headers1 = document.getElementsByTagName('h1');

for (let x = 0; x < headers1.length; x++) {

    headers1[x].innerText = 'I am sorry Luv';
}

const headers2 = document.getElementsByTagName('h2');

for (let x = 0; x < headers2.length; x++) {

    headers2[x].innerText = 'I am sorry Luv';
}

const headers3 = document.getElementsByTagName('h3');

for (let x = 0; x < headers3.length; x++) {

    headers3[x].innerText = 'I am sorry Luv';
}

const para = document.getElementsByTagName('p');

for (let x = 0; x < para.length; x++) {

    para[x].innerText = 'I am sorry Luv';
}