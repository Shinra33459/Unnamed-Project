### Most recent mainline merge is as of April 11, 2024 and includes the 0.4.6.7 update.

### 0.4.7.5 merge and bugfix

merged to 0.4.7.5, fixed an issue with the school club changing room when attempting to grab a spare outfit, added a trans variant of the line when leighton expects a trans pc to be present.

### 0.4.7.3 merge and bugfix

Merged to 0.4.7.3, fixed an issue created from previous merge.

### 0.4.7.2 merge and bugfix

Merged to 0.4.7.2, fixed missing punctuation on characteristics page.

### 0.4.6.7 merge and APK compiler

Merged to 0.4.6.7, and can now offer an APK download for people wishing to play transmod on Android.

### 0.4.6.5 merge and bugfix

Merged to 0.4.6.5, and fixed several bugs with the school club code. Also included is a fix for cis PCs getting duplicate dialogue from whitney's bathroom bully event, and by some arcane means entirely unknown to me, fixed the genital reactions that my previous attempts had failed to fix.

### Fix issue with imported saves of cis PCs

Fixed a long-standing issue where imported saves could, in some cases, have their gender listed incorrectly on the characteristics menu.

### Fixed missing genital reactions

Fixed a long-standing bug where NPCs could no longer react to the PCs genitals, due to the code for managing that getting lost in some unknown update to the mod's code.

### 0.4.5.3 merge, bottom surgery expansion and trans-specific npc reveal reactions

Merged to 0.4.5.X (previously unlisted change). Implemented previously unused bottom surgery code as now the game's code can properly support implementing it as a feature, which allows players the option to have both genitals. Also added in unique NPC reactions on discovering that PC is trans.

### 0.4.4.3 merge and changing room tweak
Merged to 0.4.4.3 and tweaked the changing room code to prevent known trans PCs from being able to enter the changing rooms matching their presentation if nude gender appearance slider is set to "judge", with lower settings letting it slide so long as they look like they should belong in there.

### bugfix update (also 0.4.3.3, since I forgot to log it)
Fixed a bug in the changing room strip event causing the player to be stuck in place an unable to continue with the event. Also fixed whitney's toilet event text getting duplicated somewhat for trans PCs. Additionally added some logic checking into the genital surgery test code to prevent phantom liquids being left behind on body parts that no longer exist. Unlisted was the update to version 0.4.3.3

### 0.4.2.7 merge and bugfix
Merged to 0.4.2.7, fixed a bug with the danube modelling job that was causing the event to break. Fixed the changes I made to the changing room code working in unintended ways. And finally, the previous changelog was incorrect. As THIS time, I have, finally and for realsies, fixed the Whitney event code.

### 0.4.2.5 merge, changes, and bug fix
Merged to 0.4.2.5, changed so that having the nude appearance set to consider or lower will disable the feature for high reputation Trans PCs attempting to enter affirming their gender causing delinquency. Having nude gender appearance set to judge will retain this feature. Also added a few more instances of slurs to the slur toggle that I had missed on my previous iteration. Fixed Whitney hallway event code after I broke it again, attempting to update it to newer code. I have finally, for realsies this time, fixed it and shouldn't need to touch it again.


### 0.4.2.4 merge and bug fix
Merged to 0.4.2.4, and fixed a few bugs related to the club that were causing the player to be stuck in the void. Who knew the club room was secretly a gateway to the backrooms? And now the mod has some new features thanks to a base game update. Trans PCs will now become stressed entering the changing room that matches their sex, and have stress removed entering the one that affirms their gender. Additionally, there is now more of a drawback to having trans rep in the school. If people know you're trans you'll be expected to use the changing rooms that match your character's sex regardless of what you look like. This can be disabled by setting the nude gender appearance slider to ignore.
### 0.4.1.7 merge, school club, and magic pregnancy update
Merged to 0.4.1.7, and added a club to the school, where players can go to have a more explicitly LGBT experience in the game. Starting in June, you'll be able to find a flier for the club and be able to join, an effort undertaken by Doren. Though as have haven't made much progress on building it up, it serves as little more than a hangout for students. Perhaps with some assistance (and future updates), that may change. Also added is a womb tattoo that can allow boys and trans girls to become pregnant by magical means. It can also be applied to anyone, and adds a slight boost to the chance to become pregnant. Players can be marked with this magical tattoo by interacting with the mirror in their room when it glows with an ominous light during a blood moon. Be wary though, none know the means of removing such a thing.

Other changes include adding a slur toggle to substitute explicit mentions of transphobic slurs with alternate transphobic dialog. As well as stopgap change to the math the game uses to calculate femininity added by a pregnant belly to make it possible to have a trans boy PC be seen as masculine while pregnant.

Also included is some bug fixes, notably an issue with the Fox TF descriptor checking the player's gender twice instead of trans status, making the game remind trans boy PCs of their birth sex. Oops. Also fixed an issue where a setting on the starting screen after character creation was overwriting the surgery toggle settings, making it impossible for people to test the feature without using the console.

### 0.4.1.6 merge
Merged to 0.4.1.6, did a small amount of clean up on the mod's code, bringing it more in line with the vanilla code structure. added a line for pregnant trans PCs in a scene where other students confront a known trans PC in a school event.

### Bottom surgery beta code
Added an option to allow trans PCs to receive bottom surgery. Disabled by default on account of lacking necessary systems to properly handle it. An option to enable it exists for players willing to test out the feature can be found in the settings menu and in character creation. Once set, the toggle cannot be unset to minimize breaking things. It is highly recommended to either back up your save or create a new save for testing this out as I cannot guarantee the stability of the code that was written.

### 0.4.0.9 merge and bug fix
Merged to 0.4.0.9, fixed an issue that was causing dialog from NPCs to break. Bit of a head scratcher, that one.

### 0.4.0.8 merge and bug fix
Merged to 0.4.0.8, hopefully fixed the issues with the whitney bathroom event, and the changing room description should now properly gender trans PCs. Added a special alternate dialog for trans characters who have their genitals discovered by an NPC who likes what they see. Fixed issue with walking into the wrong changing room as a trans boy throwing an error. Fixed characteristics screen not correctly identifying trans characters due to new code being added. Re-fixed the gendered TF traits to properly account for trans PCs due to traits being converted to a new system. Fixed a couple mistakes I let slip by in the update process. Oops. Fixed ivory wraith being able to divine a trans PCs genitals through their clothes and misgendering them in a vision.

### Changed price of surgery
The price for the cosmetic surgery has been reduced from £30000 to £15000 as it was deemed too expensive for what the player received as a result.

### New Feature: Cosmetic surgery added to hospital services
Harper now has an option to change the PC's natural features via surgery. It costs £30000 and takes 4 hours to complete. It can be accessed the same way as Harper's other surgical options.
### 0.3.13.5 merge and minor bug fix
Merged to 0.3.13.4, and partially migrated transmod changing room events into the new code refactor. Will need future work to fully integrate it into the new system but it's currently functional. Fixed a bug with masturbating in chastity at high purity causing the PC to gender themselves according to their appearance, not their gender.

### 0.3.12.4 merge bugfix and new features
Merged to 0.3.12.4, fixed the displayed trait names for the cow and demon TFs not taking into consideration the player's trans status. Also added three new bodywriting options for trans boy characters.

### 0.3.11.2 merge and base game save compatibility
Merged to 0.3.11.2 and added the ability to allow characters created in base game saves to be trans characters. This is done in the attitudes menu and cannot be undone once selected. It's currently not possible to get the Being a Trans Boy/Girl feats on characters imported this way, nor get rid of the now useless Crossdresser trait the PC might have.
### 0.3.10.5 merge and bugfix
Merged to 0.3.10.5 and fixed a bug in Whitney's events that was causing them to not function correctly, caused by an improper merge a couple of versions ago. Oops.

### 0.3.10.3 merge and custom bodywriting added (July 25, 2022)
Merged the mod to 0.3.10.3, and added in 7 new bodywriting options for trans PCs, 4 for trans girls, 3 for trans boys. They currently do not have any requirements to be written on the body. It is not currently possible to have these written by an NPC, nor do they have any unique reactions to them.
### Minor backend fix (November 2, 2021)
Just fixed the way line breaks are handled in feats.twee so I don't end up getting a repeat of what happened earlier. That's it. If you already have the 0.3.4.5 merge update, you don't need to bother with this one right now.

### Mainline 0.3.4.5 merge and Feats update (November 2, 2021)
Merged in the new bugfixes from 0.3.4.4 and 0.3.4.5. While I was at it, feats.twee had a minor meltdown and I had to manually re-add feats to the new version of the file, and used the opportunity to split Being Trans apart into two separate feats: Being a Trans Boy and Being a Trans Girl. Enjoy!

### Social panel fix (October 31, 2021)
When I merged mainline in, Git did not merge the code in social.twee properly, and it broke. It has been fixed. I think.

### Big mainline 0.3.4.3 merge (October 31, 2021)
Didn't do anything fancy here, just directly addressed merge conflicts. Haven't adjusted any new content that needs to be adjusted for Transmod yet (and I might be a while, dealing with some mental health stuff rn, my apologies). A few scene updates I pushed to mainline dev that weren't previously in Transmod are in this update, though!

### Bodywriting gender fix (October 12, 2021)
Someone reported that they were playing a trans girl and could pick Robin's Boyfriend for bodywriting but not Robin's Girlfriend. I went into the mirror code and fixed the code that checks player.gender_appearance to enable certain bodywriting options (as well as adding $player.trans is "t" as an OR condition), along with an error where the option labeled "Whitney's Toy" actually output "Whitney's Boyslut."

### Gendering fix (October 6, 2021)
Someone pointed out a gendering bug in a catcall response event for extremely submissive characters. I did a quick and dirty fix.

### Minor bug fixes (October 6, 2021)
Just fixed a couple bugs where a rogue comment escaped containment, and also some text issues in an exhibitionism scene.

### NEW FEATURE! Setting for difficulty of being gendered contrary to genitals (September 14, 2021)
What it says on the tin. There's now a slider in the Game Settings menu that lets you set how hard it is for $player.gender_appearance to be set contrary to exposed genitals. The default setting is *possible* (which works as Transmod has normally worked up until now). The others are *impossible* (which works like vanilla, where exposed genitals will always overrule everything else when determining $player.gender_appearance) and *trivial* (exposed genitals and bulges have no effect on $player.gender_appearance, which makes sense if you're playing with a very high $dgchance or $cbchance). Also adjusted weighting of exposed penises a bit to account for the fact that there's a new smallest penis size, as well as re-calibrating it around the weighting of panty bulges and also the weighting difference between bulges and covered breasts.

### Bugfix for a Whitney event from jgl (September 13, 2021)
Merged a bugfix for one of the Whitney toilet rule events from a contributor. Thanks jgl!

### Minor bugfix for masc bodywriting for masc PCs, and some dialogue tweaking (September 7, 2021)
There was a bug where sometimes when viewing masculine bodywriting on a male-appearing PC, an NPC would say "As if anyone would mistake you for a boy." Also tweaked some text relating to the locker room stuff. (Why is it always the locker room stuff.)

### Bugfix and accounting for trans PCs in events (September 1, 2021)
1. Fixed a *very, very bad* misgender in a *very* important moment from Robin, who of all people should know better!
2. Fixed a version update bug that could affect certain saves made when I fucked up removing the schoolrep.trans variable.
3. Accounted for trans PCs during some cafe exhibitionism, a certain blackmail event when working on Domus, a couple Leighton things (also crossdressing and masc herm PCs in one of them), etc.
4. Fixed some PC-self-image misgenders during a strip club random event (thanks to Wren for finding it and telling me where to look), as well as a couple other spots.
5. Fixed the logic for drive-by water-balloonings so they don't magically know your PC's birth cert has an M on it.

### Minor backend shit and some tweaks to 0.3.3.1 dialogue (August 31, 2021)
What it says on the tin. Backend shit and some tweaks to 0.3.3.1 dialogue, really only the stuff I had to deal with in the process of resolving conflicts between 0.3.3.1 and Transmod. Also a couple minor bugsquishes related to Kylar seeing the PC's genitals for the first time and also a comment escaping containment in the hospital ER.

### Dialogue fix/addition for Robin in Halloween event (August 28, 2021)
What it says on the tin. Just forking some dialogue in the Robin Halloween event so that Robin doesn't treat a trans PC as though they're crossdressing when Robin of all people should know better smdh.

### Tiny bugsquish (August 26, 2021)
Just a minor bugfix for an error that might occur when protesting what clothes Leighton gives you when you ask for spare clothes from them at school that I happened to bump into while testing something else.

### More bug squishes for changing room events, some changing room improvements, a couple other typo/bug fixes (August 25, 2021)
Wren found a couple of bugs for trans boys wandering back into the girls' changing room. I squished them, as well as a like bug on the other side of the hall for trans girls. Fixed some local typos.
Also added some candy for trans boys with higher Physique wandering into the girls' changing room, and added some dialogue for if Mason knows a trans PC's gender and rescues them from an encounter in the locker room (and also removes the +delinquency because that'd be a real dick move on Mason's part).
I also fixed a typo and did a text touchup in the scene for telling Leighton you can't wear the clothes they give you if you ask them for school clothes, and fixed a misgender-of-NPCs bug in the Asylum.

### Squishing bugs and other minor updates (August 24, 2021)
1. Fixed a couple bugs Wren from the modding server found: a missing word in the first rank of Transgender school rep...
2. ...and a bug that could cause the sidebar to say that a trans boy's bare breasts will make people think he's a girl even if his breast size is 0 (flat) and it's actually being caused by something else.
3. Fixed a nasty save-update bug that broke the social tab when trying to convert school trans rep under the old system (where it was its own variable) to the new system (where it hijacks crossdress rep for purposes of compatibility with new content from mainline).
4. Accounted for chastity belts existing in the sidebar warning messages *and also* for the exposed-genitals penalty of the Crossdresser and Trans traits (they'll prevent the penalty from kicking in).
5. Nerfed chastity belt +femininity from 600 (++++++) to 300 (+++) because oof.
6. Tinkered with the writing for scenes you can get by walking into your birth gender's locker room as a trans character. I think I like where they're at now. Certainly much more than my first draft.

### Backend change to how school trans rep works for greater compatibility (August 20, 2021) *BACK UP SAVES TO FILE BEFORE UPDATING*
What it says on the tin: this isn't a player-facing change, aside from some minor text touch-ups. It removes variables directly related to trans rep in favor of going back to the more primitive approach I once considered of an override applied to checks for crossdress rep, for the specific reason of maximizing compatibility with incoming content (like reputation checks in the new inspections content, which come with checks for schoolrep.crossdress but not schoolrep.trans). It's still stopgap compatibility in that the text output is likely to need some editing for trans PCs, but It's Something so that trans PCs get picked up when new content checks for whether other students are judging you for being Gender Nonconforming(tm). Be forewarned that despite going back to using schoolrep.crossdress, I did *not* allow trans PCs to use the one special action crossdressers can undertake to reduce their rep, as a trans PC's differences are presumably more than just clothes deep. Backup your saves to file before updating just in case I went and broke something.

### fix for big fucky wucky in previous update (August 20, 2021)
Yeah my code for trying to fix the "NPC with vagina refers to a nonexistent penis when they should know better" was missing some key components so I had to go back and put them in because I didn't actually have a clue what I was doing the first time.

### fix for minor fucky wucky in previous update (August 19, 2021)
For the bug where encounter dialogue for an NPC with a vagina may refer to the PC's penis even if the NPC should know that the PC doesn't have one.

### Updates to emergency clothing outputs, along with assorted bug squishes and misgender fixes (August 19, 2021)
1. Modernized getting emergency school clothes from Leighton to rely on $player.gender_appearance instead of $player.gender, while also increasing options for the player to protest. Unexpected protest could draw scrutiny from Leighton, and being made to wear the wrong uniform as a trans PC might be unpleasant...
2. Modernized emergency clothes from the hospital emergency room and begging on Domus Street to use $player.gender_appearance instead of $player.gender. If the person who answers the door knows you from school, though, word about your gender might get around...
3. Squished a bug relating to PC dialogue in certain trans-related locker room events (thanks to Guiding Moonlight on the modding server for finding this one).
4. Squished a bug where encounter dialogue for an NPC with a vagina may refer to the PC's penis even if the NPC should know that the PC doesn't have one.
5. Fixed a misgender in a certain slimy encounter in the sewers.
6. Fixed a misgender in an angel TF message (thanks to FadedLines on the modding server for finding this one).
7. Updated some text for a couple instances of Whitney's bullying.

### Update to chastity belt vs. cage choice (August 13, 2021)
Modified dialogue for the scene where a male or trans girl character can choose between a chastity belt and cage so that Jordan only brings up "others may mistake you for a girl" if the player doesn't already look like a girl to begin with.

### Update to high-exhibitionism-fame genital photo street event (August 13, 2021)
Modifies the high-exhibition-fame street event where someone offers money to take pictures of your genitals to account for trans characters.

### Update for compatibility with master merge (August 13, 2021)
What it says on the tin. A couple of lines in one file had conflicts with upstream and needed tweaking.

### Removed improved stress recovery (August 11, 2021)
Increased difficulty a tiny bit! I originally copied both the positive and negative effects of the Crossdresser trait, but in retrospect, Crossdresser is a *background* with opportunity cost (or tedious to farm in-game) and a reasonably good upside that isn't necessarily balanced by the downside alone. The stress penalty when you look like your birth sex or your genitals are exposed remains, but improved stress recovery has been removed.

### Fix for chargen bug w/transgender checkbox (August 5, 2021)
Fixes the transgender checkbox unsetting if the player tabs back into character creation from another tab when dealing with starting settings. (Had to put autocheck in the code for the transgender checkbox, and then pre-emptively set $player.trans to "f" at the start with all the other defaults.)

### Save compatibility (August 5, 2021)
WARNING: EXPORT SAVES BEFORE UPDATING! This save will break non-exported saves, but old saves can be imported from a file!

Changes StoryTitle to "Degrees of Transmod" and adds a line of code to ensure save compatibility, as required by DoLmods.net.

### Initial Release (July 30, 2021)
Added $player.trans variable (values: "t" or "f") and a checkbox to select it in chargen, separate from the game's background system. Also properly set it to determine your wardrobe and posture, and to preview clothes in chargen. *Current implementation of trans girl/trans boy picker is perhaps slightly unfortunate.*

Implemented effect of Trans Girl and Trans Boy traits on stress (same as Crossdresser) and included exposed genitals as an alternate condition for the penalty even if you look like a girl with a penis or a boy with a vagina

Implemented display for Trans Girl and Trans Boy in Traits panel

Added functionality to Characteristics panel to display if the character is a trans girl or a trans boy

Added Transgender reputation to the Social panel, including various code associated with this reputation. I'm not sure I'm satisfied with the text displayed in the Social panel, or the messages shown when trans rep increases. The coarseness and kind of ignorant language is intentional and intended to reflect the school rumour mill, but I could be convinced to tone it down a bit.

Implemented feat "Being Trans," awarded for playing a transgender character for 50 days, as an alternative to the existing "Being a Boy" and "Being a Girl" feats

Changed text for NPC rage reaction to discovering the goodies in an encounter from "deception" to "revelation" when playing a trans character

Adjusted weighting of exposed genitals with regards to the PC's apparently gender to make it possible to be perceived as a girl with a dick or a boy with a pussy

Played with the text output in the status sidebar "crossdress" warnings. No longer warns you for dressing according to your character's chosen gender, but does warn you about being uneasy if your genitals are exposed, even if you look like a girl with a dick or a boy with a vagina.

Added a new school gender reputation attribute for trans characters, $schoolrep.trans, and updated widgets to increment it

Removed +arousal for trans characters when entering the pool changing room

Forked some of the text for trans characters using the pool changing rooms, including exempting them from text stating the PC feels naughty for being in them

Forked changing room events for trans characters barging into the one associated with their birth gender while passing as their chosen gender. Not sure I'm thrilled with how it turned out, but let me know your thoughts and if you have any better ideas.

Fixed a bug where a segment of a locker-room event for herm characters accidentally checked $schoolrep.crossdress instead of $schoolrep.herm as long as I was in there.

Added alternate text events for the gender-nonconforming/intersex bullying events for trans characters, using $schoolrep.trans. I'm not sure I'm satisfied with all the choices I made for these scenes, and I might be convinced to tone down the slurs (or even to add some British ones if anyone knows any good ones, given I'm from the other side of the Atlantic).

Tinkered with Whitney's toilet rule to account for trans characters and make the rule actually matter (did not correct it for characters with the Crossdresser trait)

Added forks for some relevant happenings at the maths fair
