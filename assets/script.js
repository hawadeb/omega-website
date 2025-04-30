const hawa      ="hawa_music";
const catlicky  ="catlicky_music";
const kfj       ="kfj_music";

let playing = false;

function PlayMusic(id){
    const _music = document.getElementById(id);
    if (!_music)
        return;

    _music.play();
    playing = true;
}

function StopMusic(id){
    if (!playing)
        return;
    
    const _music = document.getElementById(id);
    if (!_music)
        return;

    _music.pause();
    _music.currentTime = 0;
    
    playing = false;
}