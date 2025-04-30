const hawa      ="hawa_music";
const catlicky  ="catlicky_music";
const kfj       ="kfj_music";

let playing = false;

function CatlickerPlayMusic() {
    if (playing)
        return;
    
    const _music = document.getElementById(catlicky);

    _music.play();
    playing = true;
}
function KfjPlayMusic() {
    if (playing)
        return;
    
    const _music = document.getElementById(kfj);

    _music.play();
    playing = true;
}
function HawaPlayMusic() {
    if (playing) 
        return;
    
    const _music = document.getElementById(hawa);
    
    _music.play();
    playing = true;
}

function StopHover(){
    if (!playing)
        return;
    
    const _hawa = document.getElementById(hawa);
    const _catlicky = document.getElementById(catlicky);
    const _kfj = document.getElementById(kfj);
    
    _catlicky.pause();
    _catlicky.currentTime = 0;
    _hawa.pause();
    _hawa.currentTime = 0;
    _kfj.pause();
    _kfj.currentTime = 0;
    
    playing = false;
}