

if(sessionStorage.getItem("button_id_1") == null || sessionStorage.getItem("button_id_1") == ""){
    ty_item_2_onClick("item_1");
}
else{
    ty_item_2_onClick(sessionStorage.getItem("button_id_1"));
}

function ty_item_2_onClick(button_id)
{
    sessionStorage.setItem("button_id_1", button_id);

    var e = document.querySelector(".iframe_1");

    let numberOfButtons = 6;

    var eButton = ["", "", "", "", "",""];

    for(let i1 = 1; i1 <= numberOfButtons; i1++)
    {
        eButton[i1 - 1] = document.getElementById("item_" + i1.toString());
        var icon = document.getElementById("icon_" + i1.toString());

        if("item_" + i1.toString() == button_id)
        {
            eButton[i1 - 1].style.setProperty("--s", 1);
            icon.style.color = "#1e77fc";
        }
        else
        {
            eButton[i1 - 1].style.setProperty("--s", 0);
            icon.style.color = "white";
        }
    }
    switch(button_id)
    {
        case "item_1":
            e.src = "./home/home.html"
            break;
        case "item_2":
            e.src = "./poliedros_platao/poliedros_platao_1.html";
            break;
        case "item_3":
            e.src = "./prismas/prismas.html";
            break;
        case "item_4":
            e.src = "./piramides/piramides_1.html";
            break;
        case "item_5":
            e.src = "./cilindros/cilindros_1.html";
            break;
        case "item_6":
            e.src = "./cones/cones_1.html";
    }
}