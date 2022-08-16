const next_question =document.querySelector(".next_qn_btn");
const prev_question =document.querySelector(".prev_qn_btn");
const opt_list=document.querySelector(".opt_list");
const side_panel=document.querySelector(".side_panel");
const ques_list_buttons=document.querySelector(".ques_list_buttons");
const submit_btn_cls=document.querySelector(".submit_btn_cls");
const questions_heading=document.querySelector(".questions_heading");

var option_selected_list=new Array();

for(i=0;i<50;i++)
    option_selected_list[i]=0;

let ques_numb=1;
var score=0;
window.onload=()=>{
    show_ques_numb();
    show_question(ques_numb-1);
    show_option_list(ques_numb-1);
    show_que_list_buttons();
    submit_btn_cls.innerHTML='<span> <button onclick="score_find()"> Submit </button> </span>'
    
}


next_question.onclick=() => {
    if (ques_numb+1 <= questions.length)
    {
        
        ques_numb++;
        show_ques_numb();
        show_question(ques_numb-1);
        show_option_list(ques_numb-1);
        show_selected();
    }
}

prev_question.onclick=() => {
    
    if (ques_numb-1 >= 1)
    {
        ques_numb--;  
        show_ques_numb();
        show_question(ques_numb-1);
        show_option_list(ques_numb-1);
        show_selected();
    }
}
function show_que_list_buttons()
{
    var count=0;
    let qn_btn_list_tag='';
    
    for(i=1;i<=questions.length;i++)
    {
        count++;
        
        qn_btn_list_tag=qn_btn_list_tag+'<span class="qn_btn"> <button value='+i+' onclick="qn_no_selected(this.value)" id="btn'+i+'" >'+ i+'</button></span>';
        if(count==5)
        {
            qn_btn_list_tag=qn_btn_list_tag+'<br>';
            count=0;
        }
    }
    ques_list_buttons.innerHTML=qn_btn_list_tag;

}
function qn_no_selected(qn_no)
{
    ques_numb=parseInt(qn_no);
    show_ques_numb();
    show_question(ques_numb-1);
    show_option_list(ques_numb-1);
    show_selected();

}

function show_ques_numb()
{
    const ques_no_display=document.querySelector(".question_count_no");
    let ques_no_tag='<span>'+"Question no: "+ques_numb+'<span>'
    ques_no_display.innerHTML=ques_no_tag;
}
function show_question(index)
{
    const que_text = document.querySelector(".que_text");
    let que_tag='<span>'+questions[index].numb+". "+questions[index].question+'<span>'
    que_text.innerHTML=que_tag;
}
function show_option_list(index)
{
    let opt_list_tag='<div id="option1" class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    +'<div id="option2" class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    +'<div id="option3" class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    +'<div id="option4" class="option"><span>'+ questions[index].options[3] +'</span></div>'
    opt_list.innerHTML=opt_list_tag;

    const option1=opt_list.querySelector("#option1");
    const option2=opt_list.querySelector("#option2");
    const option3=opt_list.querySelector("#option3");
    const option4=opt_list.querySelector("#option4");
    option1.setAttribute("onclick","option_selected(1)");
    option2.setAttribute("onclick","option_selected(2)");
    option3.setAttribute("onclick","option_selected(3)");
    option4.setAttribute("onclick","option_selected(4)");

}

function option_selected(selected)
{
    
    highlight_selected(selected);
    option_selected_list[ques_numb]=selected;
    highlight_qn_no();
}

function highlight_selected(selected)
{
    var ch=option_selected_list[ques_numb];
    switch(ch)
    {
        case 1 : document.getElementById("option1").style.borderColor="#9c9c9c";
        break;
        case 2 : document.getElementById("option2").style.borderColor="#9c9c9c";
        break;
        case 3 : document.getElementById("option3").style.borderColor="#9c9c9c";
        break;
        case 4 : document.getElementById("option4").style.borderColor="#9c9c9c";
        break;
    }
    document.getElementById("option"+selected).style.borderColor="rgb(177, 11, 122)";
    
}
function show_selected()
{
    var ch=option_selected_list[ques_numb];
    switch(ch)
    {
        case 1 : document.getElementById("option1").style.borderColor="rgb(177, 11, 122)";
        break;
        case 2 : document.getElementById("option2").style.borderColor="rgb(177, 11, 122)";
        break;
        case 3 : document.getElementById("option3").style.borderColor="rgb(177, 11, 122)";
        break;
        case 4 : document.getElementById("option4").style.borderColor="rgb(177, 11, 122)";
        break;
    }
}
function highlight_qn_no()
{
    document.getElementById("btn"+ques_numb).style.color="white";
    document.getElementById("btn"+ques_numb).style.backgroundColor="rgb(177, 11, 122)";
}
function score_find()
{
     for(i=1;i<=questions.length;i++)
    {
        if(option_selected_list[i]==questions[i-1].answer)
            score++;
    }
    let result_tag='<div class="display_result"><b>Your Score is '+score+'/'+questions.length+'</b></div>'
    document.write(result_tag);
    
}

