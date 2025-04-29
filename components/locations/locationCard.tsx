//Tarjeta de personaje

import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Location } from "./locationType"
import { useState } from "react";

//tipo para especificar las funciones de characterCard
//propiedades de Character card 
//primer paso definir props 
type Props = {
    location: Location
}
export function LocationCard({ location }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    //estructura de la tarjeta 
    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
                <View style={styles.card}>

                    <Image
                        style={styles.image}
                        source={{
                            uri: "data:image/png;base64,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"
                        }} />

                    <View style={styles.content}>

                        <View>
                            <Text style={styles.label}>Nombre:</Text>
                            <Text style={[styles.textValue, location.name.length > 20 ? styles.smallText : undefined]}>{location.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Tipo:</Text>
                            <Text style={[styles.textValue]}>{location.type}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Dimensión:</Text>
                            <Text style={[styles.textValue]}>{location.dimension}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Residentes:</Text>
                            <Text style={[styles.textValue]}>{location.residents.length}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Creación:</Text>
                            <Text style={[styles.textValue]}>{location.created}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                    <Image
                        style={styles.modalImage}
                        source={{
                            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAA1VBMVEUAAAD////CAADm5ubl5eXk5OTv7+/y8vL19fX5+fn8/Pzs7Ozt7e3p6en6+vrEAADLAADTAADKAADVAAC2AAC8AACuAAChAACHAABuAACpAACbAAB+AADU1NR+fn5pAACTAADBwcGLi4tMAABgAAATAACurq4cAAA5AAAhAABXAABCAABgYGCHh4eDAABHR0dxcXEoAACXl5eioqJPAABWVlYPAACysrI3NzcTExMsAQF3AABKSkopKSk2AABlAADPzMwvLy8fHx90dHQhFBQwJycaGhqnlnqkAAAYcUlEQVR4nO1dB3vbOBIVLYpFhVXNRTLl3u24JlHiOM5t/v9POoIgQQwKi0DZ2vtu7nYX0SjS8AkYDAYPg5YWS7fTbut91DL1uGWh1qDdbndQQ0PKHmpYRNnTKWV7gBo2Upqo1UfKrkRpEGUbCWo4RGn3DSv5fM2yLCMxSENKg5hmA9NyuynTaLvbIrvLTdNFytbnI9Vt9wzDtmeLl+s/dy0iT1d385fFrG2ahvV/pBKkrMXD3Y+WXK7mJ+hvWO2NQ6qDzdGrIqXjD+0IkWKVNFIDwzQW868FIOVye7DoWP02NA0i1bHU7DaK7W51Y3EGsRioZaKWhVo91EKNLlFaRGkAZY8oTaJ0gNKGSjtuaDFK19VQyuTH/QzBk5smsrsPTOs3Z3erE0uKXywYP9TC4MaCvS5qGUTpJJ0CtfBPmylN1MK/e6ZMPgP/7rmybfQXf/7WggnL+/WbOdCAaSK79bihC0yra3eP2G1prXYlX2KTKcggjjV3yZ2a85Pzdv1tBZiw/LzX0xFSdV4VmKbXt/szkHqpN+h4eVpIvO5akdJjSUefrqe9OH4p7cWxpKMvbhlEiXsx0uIPzZQm+ozU68YtokxHH/ow80ERJiwPhtGuZXdu2ip2o9FnILFjsVDDRC0TtSzUUlP2OaWtzxvBCcm8b32Y3UjZyvDr5Pilri0FV0ONHgVuLD2gZH7afif7aVml0RxOSO7tPrDbatLuNtNfOx8XefbMg5InP/5+tL033Z1Mdia70XR7//K0FKt+738tRu8MivzT89kyGo88P/Q9l4jn+6E3Gkf7Z8/yv/ntxTQ+FinB6NOr9mLWsYJenCrNhXS+e4yGnh/E0GwJJEEsGEaHUrSeZtA0YLdex25DYDc9+swPELv7R/yYx8sdzxNjBPHyvfHedwlW95r1EQ8hjBIIuGC2zWJ0YZTQKZhtrRfxmNsexzCVoUTQCvzhjbhn/Z4Z5XbDKKFTxW44lNYfebb7wg51OImHXFWYCFg7F+Ju1ZXYvTkxevk3ajPRwmV75NeEKQXL39oTQfXDXD9SOh9YANfWkY++TlEvzpSiKW/q1e1OdMcKpyKs3pjRx9pt1rSbm8haKAq1+7HgeBS1cLCKWkSJY9pSZf4ZWGlYV/wz3fjBqjBhCcJIANVBt9y0qnaLlCRK0IuiBG62BUo2SiDLr0HnJ/dAS08Rp6Rj+YJ+9aRod75sFCrXGnkuuKd5dD11nJAEwS/uw9/RI/wrY3QeqElDOCHxh1+4z5+tHylBXlKa/EPfCJRMyrSfph5P2OfYrx49VRHX56fBRQN2S/KprSRnrNE5Yw0llNtJrhu9NEiU7SyhbEqUhpalsxNlz+LWwzt+kzgh8YbcGvpEq263I7IbvQ291CXKNA2P4in5JoVO4pIOHU9lsa4wLsFKDqjH1QMDubjeEQvVS2Iab7dZzW7Jvs8as8MsUNPGOxQWPxJB9YkxuiNBSvaN94z54wZdORRvJIBK0qfWGKOXrpAlsS7jzM/L0wWri+u/clDJVshKMTp+tdG5r8fkDi7X4aIo8dll82I1u0vmPtjTmoinTCaOOmJdVOO4hdsMVIPMtM2OPNvQ6n0WKC8SOi0V/PwlA5X9IUjJGRydjCZRyIR4h0CF7GN5LRFU/mjUIFS3rN0NMTjsUiaEiMFByA45TSKO8bSn4h615Y4EqxovOGoNm+xVc62m3RS55GMYHAaMDzgfFSO1E78+BgkFvC4ZKfkvdmlzYrCmbRaDYzAD5h5yQy+GJUIaugP54+TNitkYfx9ClezZbE52mEXKAMZ+EbnuYMrg4qczl+qU6F+CL//ZNFLVGRyFezP4G7U7YKxwjgvwUu017W6ulwWOysFDeAy+/UCT7818MoPD6sJISux4wnQrajtxYe4WeTz1MMtjxp/TJL2jUQbHABgqDpu2gky/Ew/AYJi/Xx2pZLKgxp+xqQwOE4y9IwIU2El3J+QdsYJe3qrNfYl4MFY4MDYzRh+80Vae5kDtREOP7FsF+RR1GXq0Z1GKp1Lxz+D4Y4kwm8HgMH+3xM/txn88nA5xbtin3rP/SP+NnQaQcl2A1JNTwW4x84QffQk7wYrFlLUqKrtgD/SGclJpXHC267v04GMlorANVs1nBRH4zIWl9lBUqzkGh01b+B3E5tmcdL7rh6AbAfmVoYO21LdXjUP9Q/oz3y0VBgeMEpqKPG2QDx6DkeSRlcbrjRSo1iUOGzxv90zBaTHj76G3ITE6+cZ2h7aPWxfL8aHEi2EKJ4/CD6guAfwxzA1jcHRghMB6mZBN4AplGA6zlJxK2t07pz/0vtcog6OXURbMuNUjTIgeVFpyZVenrYtYJ+MK6SmsnJJH3FVZLTPxZ9cpsDt9KLNUafYYBofAtVVjQtD86WM+JwWNL5NXtS0vuFQ+UWRwNBx5WrRtgsAorIXUWC2ycof0h33brBidzt99FySl4NxdIoL0Xz3xQSiycDaJwVHSpbYCdvekSJRjddipfmjNMTgQn0FDZIe2iVoGajkaRXaglCZq2UDpDOid0HPSpTADP/DD0At5tpNUpur7zSFY/s14u9uJ3eglAyozBofWJUoLtXA8tSqDg8QlFk3Lx4uSwPe90XgSTfe2f72enxYcU2DlSwMMBndMf+KfzK+wdn88gwMkz3GkPWytKoruHAtMf9rax8XohX0KEFtucCgUcMSKinIYyk6G1BG8rZHJAnabJvLoelEeXXoSUvsPZVW2F+yuCtXFMpqM/NALlPAK6I98SsAoyqPrFVbIZCZYee5rv9FdgngZZqlaU86PltFQASsPTCEdfSMYHOB8427+cEG1dXGBHK4+C8JVwUNvIyJP4x/KJnrBpgrVhSCErSwhPd3+sDaBwQHS5xegFwTyBGcFUQvVYazb+QgGR17oQsyEMOmVzC70LH6d0JyRpVoACkOqF2MlBkeuNJtgcNDkFjZb4p+3VhRlCi3YJr3aBAYHnT8/4+h3fLrl/fade42XSDlSBwTsn5+eHY6Vb5RBN1wGjk0iXCN/YZVWl9hVX9K4u/QH6hvA4KDdFJ9GgPZiqk780c5tIVCTJs5rgZn3Jd/JBHszdRkcaFsLUxaSDS7wUomy0E1tuZDXG6/qEU7oV0ihup0fXF+xp0qHDQAVDz/6BNK8W+ehREplBkePMueVIyWOgUc/0BKk0PkULVlV32lY9AcarIsaB7mLkKLD9K8aY3cJg0OwhwzHZO3Is03nEX5BpLjDUkYKFCq3pf1OXkgO86APAq5rf7jaMWX49RH9kQ6x+5Ni9AHN0o/A4wUjZu/qFsOE/5fsUeCBiP/dB7UnznaUz5bCiMpuCKmVR99A6tD5sz+3SV/CuHSTmQAD1cWu6w2++/kmUBuEcIn+xo2+phgclqTFvKTRR7Ip9n3g8XsMt7hHafg/B0mfSgW9wNefOFLL6gHO0YlV9lCyZ2+KwUHVlzzP3ZQvXPHhHmQkfTaBeH5wcHC/mCWxA3d+q9X6roYU2Pe77382g4MyJo/QA3GpjIOXtCbl3z/38LjWP/OT2W/27VNFtw4ilDvjs2N0yphfeRbPm0xr7MYI5YLhUKFtnsDzvaByMjSguYy/rfUyODrFDI4OoLjsUbOV6/rhTp3tUBanLXo94wa+P5xMt38dHj4ebUcTt1JxChgm9JphcMRiOLbtmKiFyA6OgVpQaSVKh1YCXnXE/NauP4YM8cqyt0VNe64Xjvcgf7N1Ng3KsYIrKdMRPZSdPJQJHspBjT5UcgyO2jU46Alrl1/1cYcUy+X415iuIuR6o6Vwt3C7FCu4lWZqn8vgoB2zaJs9ZE6zlMqOD6Iov2AIRyUBF0Rqpn1ujE4TzITk37Bmrzqik+euW/i3T+NRWoQUyCbcN4GUwi4WjZSYmxmWVlCEcuiSUeWNS9+9XZDIgkH6vaa4i5VHCaiFX0UtPE3wShO1yIQKdrCESHnYrZ7X8O27aRzlVdmwKNrAAUgd9Cm78YSOGgb/UGl9+1hw70EtZQZHKVLZWc7HOv7qbBy6BOMyKehVEKnepzI4AFKCtUeYJbMv6+3SHA7dSj0KieQkkwCpz2RwlPQpAlTrewERXSh+dWqolLsu7lMNI6XL+hT80GKk/Hx75LnWJunpJKxDAJF0Kjj3CfqU5KE6mbINkNIyZ68+97FRAtgXjao/+Gvs0r060b3ouPMWS7dRnvtgT1OKpyYQqQCQ0KsOptflMHbnzJniMpHUquCR2pDIk1n3BTf0dkPE12oTSohWMl5dryYuWgzCsTUgVYvBQa9mpoy9gT+6IX1jv+Lkh5xdfe6jkO0BV8gzrTqDQxcxOJxY7AFaWXcdp4tzCaiFVtYDqLSg0o6VoGogz7lwA38rwgu304ouHR1XW4HNIDqaC7Mu8SPkdjvoofrxozgWapngoboCpdlTzE8NaKTEP6zr4ymoqqPyVmLIPAq+2wObaDpt9yr5KbXIE9TckB13wayT3YqOamc1hqggqPJBEb3Pzg7TTJdTcVyTOtZ9tvKRRB5DYQ3mMtnnvxxMoO/mOhgc1fdmQB69Ja4hFeAnPy1PDLQutqOdobcSUoKyMB6dxXgymmBwmKszOLp0ZWHxppOfDrthqZ+eJFx0t9rKmBXuZ4Ih+tyu9FCmRGkqMzh69M4om0hP+1SqXZYeh8QH4uGUVVk4RwVZbi/Q7o9ncPTphZ/AV9BFN8qpxElZKm81ciiHFFwjLIjdn8XgoDkqZyKkPJKZ2uUKunKCwiJfvOT7mpPT+FriLcF+hwcyy0ZDSK08+sABB2GxrWB5eLEfTcaT1mkFfrrHrEFyudayTeY3IfmRG/oe2NJxlEdfqUeXKnHLpM0R7jkEHropxY2jqqikU33fGwbSwadraRmwe0DCJbLHdGgYlt12S512mUdXrsFB0572CrbgUEGXopjydHeU7PN5YjVatiUcj2f0owvG3yODFKxbcuWIeZ4fWYODziZcFuyUoNplZwWLPx/TDYSD7+oloVgl9a2uE7LVjLua5ZVJUkE39WIpc4fVkNLhLnJRRYiEHz6SRgpZLAZnrNbPq+sHTDhGFCv0SsqqjZ3O2/387vbve0pvf2Z+Jdg3m2FZK6yQ4w8FhczEEVX6Gx9HnivbwiO5OOq8C75EWtMybigmHHe0DKpM5qJfCfbNb12Ttbv2CjlJrGA+Qyw46+KkOYherkxyEFCZZC96PZP2GRfyTuUOE+am6E6B1nHOq6aQwl0ppYUm/0aMbh2/lv4jRQpODFc2stuh7aYfygTKbo9kXYiSMDhIPNWpexZLh9cXFgy/rLt53i7M/R5GNLMlypHCSGTE7Pj/33Cf0vCfst52J/pqH3zFw6DWWSxhJo9Bqm7k2WmDFJWA7yLCLKQzMDshLMFEFDMN0/y76X81B716khOOUy1+NzwTz0wMs/YmnIQEjqpaSRZQz4CpzByQ0Xmf9yjs0JPf5CuBKQUq/aWOQJ/ywJ71b6Ohk5Bq55BNUJO5vIKiG/jgB2fZiHlu2CaI0CdIXghMGMHfot4MZ755v4FzyCBKyBkcOsPg0GmyQz6hJp8Hht+ymP/luuHwBqZfHoMtH9SxJDmAJ+yIumn3yRYxHS3DCQGVlSAAK2QmHzET2t2VPBTZNs0ZHA3VSwALmkKf7oajKZ+lujh93R2FedfKs7pXWg4K9YO8pUcAkJBaDaBLheBb3rUKNTj0D6jBAdj70pAqHnSjqZhLhTrA+RLxXJO/6+Ud4utMy4Smq9/10hfz60tBiM4cwDzQ2OBSLUYXTJfV+hQcfsfCrW/XHxOYONpmtsN1vkQwByDnebVAHmbG0vp/XD+83IMVzR41lzBb0J2G+1S7XZ9phmE06SIcwkCBnrSP+ezvksxUx+HKxTtyR8XsrH6V2A39VLvIT7WbukUFJIxExX7osGAquIQ2B9INKu7hcJInMhjG8slAZrf2sTU44l4Hir+JOhVdZiUeahwf+JI4lmgFYjYWUiyV3aw328Duz63+BmpUnvIVBalsyzL2IbDboGzwJAPvIiEbV9xFBUIqPjJe6lrTG0RK9fbMjtjmTOiDrshLwTQVCgqeSeY4uXD1coWDJNmXBsy+ftuW212HuY+OOrCnQcjZCMchSic/DUKW3Xa6Jnds5u4UrvJprjpEa3y4KNtGkyLZjthJNjSj2kBNSZeCEduVVmC37bCnQRzqNIgDToMo56eSLgmXydSpLG7mSyCAfQoX/8461V5ye5ogQC0WUoqC5V7N2nyN2E9gcJAKzTa8wR5uvrmU8bsELiJfkjXxNE0onfquF12+1uKFHk+3iDtnNoCerM2o0EyQggX3Gace5i72Bp3ifmYiKvzHLI6KH9b1/bAGf/E8zNeNbNGP2WCdt6jU2ptJJwQbeirAOqNihMTbHkfwafDgzDxVuhwKWpWF4kMEzI8Qd6mm6qMrntgmLQveXgRuJ8itf032E54ZpNIDI2kYlBaQk+2Q8rLMOzBXck6v/lCkle73sSe2Cbiqt6gY8Fae4zxSoLJqu8na75RBKvVJ4zSQT/+mV6kANqTjsWNvXmB33SoAcEwq3A0Ca8nHISR5ACqljTFhkUo702WKWLYTXQ0qeo+R4xw3fzdIA0jpfWa9n21MUcPoCAfn5wxS2R9Tn76d+TiPeZ9I6B4VsAP2xWwcqQZGX0c3mHP8qauiyshPcMLlC0M92EvXzHspkOThvVFZWEXPHJyT+mGufIeRhMGhUlWJUtqMU09D9fxu2ezwzBdmEbzMqnSnfSLPxbtecWZhQkcjHJ2oY9d+qJoMjlqVumi+5Bxaista57/0MkXoCxMrXWR9bIz73JRaN4ZFxDNwaNtjI7B7+V1rq/A8G4o801vpmJpbyNtSMUI2DI/ZJHG2cbWNPTJVbs+/fByFU1kpbCo+oE7IpYLuGt2cmw6Zb2SDKjQBUpX9ljL+VIbUKJ3kyX4zDiRvRqPoUIhWXiaOp/sbDSOlXqWSrvbIzn+tbT+gvMeu5IxtiuAkygAgO/PZOy6Xk2gn2tvbvrgAuSuyn8P5sxPGtEK7K6R6EYOji47GDPC5GdTKj8Z0u07Xyc/N5ErUilVdcsQEK0326toYBJAW34taIsFdaUiU2X4wQxFqHR+ffYFJvjSi4Nn+15rMbltkN6XE52Z6UGkOGr8PucuCAB/2l/D4TBILbOVPmy2wK5TD9sRD77au3eXVdHmkFO/YZkL1KTvPSbZeTkElJuyoggqnHVB+VXAkydT+BbeRw9pkXJr3eyDcHoV3FOKjghLKJ5B4nhTsUejaepBS3sXS6Amhe138bDtnoldhkiVhrBXc9UeJy8VRKU2/rt0VGBy6Ii+Bm22vBA9EZE88/x2PQBiAHJVXaT9rhx96L8gOxu6q9zio8hLqIcVNgLTIYqrjET2rjeV8a0aW3N2JByK71W+8aDRGJ9/4Q/RMZTKihlHsqCum8rjLE+f0L9xsjK58Mw//wzlfhU9VIuN8uF0EXDAlEyYffCceC03ezENIGrUZHKjBMCGM4mLVEolyqMLKd2nBt91lpuV2y8oBldcKwks01GqKwaFxc0hZXW+J5KzikVv1fjZACPlj6Up2r5vBodFurp8O3iK3LpND0kEit96df1jmWo+2e8Mjzwyp4mBBLPk89svzC94nkQdt7UipMjhAlpUkAuflzyaXsP5tNS9KdpcxOPLqlvji0bSep82UvrSz6paFShMoHZsvulxd6pcsedMaspsp9pneyKrE4Cittdopfz6Z7NS7xbX107DyvW/ebvVbftcTeRI3Z63i1xOJolpvv+oK1xYbkx0uRQpe7ldHLmsVmHgQ290kUg0xOORMCGPxd0WsqsvfTqndH8XgMFd6G1ZaNncStmGZ25bk21Xsrszg0GWuTavFhEiUbyvWtK4k395o05qye40MDj7yzJWaoRRaFcqcMe3fGKPTSnO20jqwVG5n9sci1QiDQ9SLibJtLdhLndTleWG2GdMaslvG4LBpyoJNWAw2o7RLlFah0jZLr1irKSeaU9U0Bbuze7EaZXAUz7Z6z2gSqwfDqGH3ZzM46kZwfeekmTH4fmL1quT//0UxOvONsXKxUpIdyNUbldb8KKSaZXBIUqZMPnV2oNKx3h/6tGkiu/VM2SSDQ/nu2np3wOK/Gcei89XA+nYw06xeatra7bYpZeMMDiaeku/79BbzKlez0vL1YAZMgyMki9FXtfvDGRziyFPgSwaGMTu5ktHtOJTmLx2z5wDTOF+i/Q/E6GKvi5Sdl3lZ+H51vzC17qDc664dqTXsYsl3g2glPhrfizvX4mR+xyX9/l7d3Z8sBvgau3Kvu16715+fgislfr2P+6s96Bvoy2ezNySz2aynmZbZZ4JLQZ6iot2r5KeA3f8FVAgq7eUpaCAAAAAASUVORK5CYII="
                        }} />
                        
                        <Text style={styles.modalTitle}>{location.name}</Text>
                        <Text style={styles.modalText}> Tipo: {location.type}</Text>
                        <Text style={styles.modalText}>Dimensión: {location.dimension}</Text>
                        <Text style={styles.modalText}> Residentes: {location.residents.length}</Text>
                        <Text style={styles.modalText}> Creación: {location.created}</Text>

                        <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.textWhite}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "auto",
        borderRadius: 8,
        borderWidth: 4,
        borderColor: "#aa853c",
        marginVertical: 5,
        backgroundColor: "#c1c19f",

    },
    image: {
        //bordes izquierdos redondeados
        width: "40%",
        height: "100%",
        objectFit: "cover"

    },
    content: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,

        /* justifyContent: "space-around", */
    },
    label: {
        color: "#2d7096",
        fontSize: 16,
    },
    textValue: {
        color: "#094161",
        fontSize: 20,
        fontWeight: 700,
    },
    status: {
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: "grey",
    },
    alive: {
        backgroundColor: "green",
    },
    dead: {
        backgroundColor: "red",
    },
    unknown: {
        backgroundColor: "orange",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    smallText: {
        fontSize: 13,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 5,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: "#094161",
        padding: 10,
        borderRadius: 8,
    },
    textWhite: {
        color: "white",
        fontWeight: "bold",
    },
});