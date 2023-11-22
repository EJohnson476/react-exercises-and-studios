
export default function hobbyLinks()
{
    let hobbyLinks = ["https://en.wikipedia.org/wiki/Snowboarding", "https://openai.com/", "https://www.missouribotanicalgarden.org/"];
    return
    (
        <div>
            <a href = {hobbyLinks[0]}>Snowboarding</a>
            <a href = {hobbyLinks[1]}>Artifical Intelligence</a>
            <a href = {hobbyLinks[2]}>Botany</a>
        </div>
    );
}