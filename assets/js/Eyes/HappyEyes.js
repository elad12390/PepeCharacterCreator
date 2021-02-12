const happyEyes = "<svg id=\"happyEyes\" class='eyes' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 442 234\" width=\"442\" height=\"234\"\n" +
    "\tstyle=\"\n" +
    "\t\t--eye-ball-color: #000000;\n" +
    "\t\t--eye-back-color: #ffffff;\n" +
    "\t\t--skin-color: #5a8d3e;\n" +
    "\t\">\n" +
    "\t<defs>\n" +
    "\t\t<image width=\"39\" height=\"33\" id=\"img1\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAhCAYAAABa+rIoAAAB5ElEQVRYR82X4VXCQBCEZyrQDtQKhAqUCtQKhA6gArUCoQKhAqECKQE6gA60gvUN78IL5+VIwrvD/UvCfrfZndkj/nHQZzOzPoAXANcANgDGJCfnOMMezswuAXwCuA+ATEkOcgPu4BzYF4BOBGBAcpoTsIBT0ucjiVcku+eAszpJSf7p0TrvtX2mqJwa/+rIn/yQVF9miyafdUZSk5wtCjhNqAYiFk8k59nIAJSlZAngriL5lqR0L2uU4SQjArwIEPRI6rescTB9zh0+PIIJyWFWKpcsZF/qvzGAWwBvJF/PAaac2XTLuZCE/rFkkd+ulWSPC78IWeDMTEBql5hOqqdHJFcFZHI4M6tjjQWPKinAnYcnhTMzDdJ7i57tqoKp4erYYoh9SbKXGq7WQhGi05KRGk7NLUlqGmuSndRwTYahfICdI6WGq7NQ+FXdC39SOGU1s9hC4YMdrGU54LTNqPdCC0UZTvom29xHyFul4mWbkTDKXkZNu7p43sxiG88WQD+09fhbicCqbmEnLQHOW1UZWZmquHZ34sobnQ8Xm64NyZu21Wvzng8XFc3UuhjdSswsZjcLkvok2cKvnC4wDxXZs6/qoYGQLvmWk/1aWLkyubuE1h1BzgAMSUpSskZyET7lNL8ilKsiZADMOQAAAABJRU5ErkJggg==\"/>\n" +
    "\t\t<image width=\"491\" height=\"337\" id=\"img2\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAesAAAFRCAYAAABUooWyAAAgAElEQVR4Xu2dCdhF3Vj3/4kvRJLIkGT6yCyURCKaVEKSSlKpfGUeKiq9NGjEl0ZlKqIyvKK+UhkKmSNCyZwpJWSI0nf9etfKfrd9ztlnXmfv37qufZ3zPM8+e6/1W+s5/33f6173+qRYJCABCUhAAhJomsAnNV07KycBCUhAAhKQQBRrB4EEJCABCUigcQKKdeMdZPUkIAEJSEACirVjQAISkIAEJNA4AcW68Q6yehKQgAQkIAHF2jEgAQlIQAISaJyAYt14B1k9CUhAAhKQgGLtGJCABCQgAQk0TkCxbryDrJ4EJCABCUhAsXYMSEACEpCABBonoFg33kFWTwISkIAEJKBYOwYkIAEJSEACjRNQrBvvIKsnAQlIQAISUKwdAxKQgAQkIIHGCSjWjXeQ1ZOABCQgAQko1o4BCUhAAhKQQOMEFOvGO8jqSUACEpCABBRrx4AEJCABCUigcQKKdeMdZPUkIAEJSEACirVjQAISkIAEJNA4AcW68Q6yehKQgAQkIAHF2jEgAQlIQAISaJyAYt14B1k9CUhAAhKQgGLtGJCABCQgAQk0TkCxbryDrJ4EJCABCUhAsXYMSEACEpCABBonoFg33kFWTwISkIAEJKBYOwYkIAEJSEACjRNQrBvvIKsnAQlIQAISUKwdAxKQgAQkIIHGCSjWjXeQ1ZOABCQgAQko1o4BCUhAAhKQQOMEFOvGO8jqSUACEpCABBRrx4AEJCABCUigcQKKdeMdZPUkIAEJSEACirVjQAISkIAEJNA4AcW68Q6yehKQgAQkIAHF2jEgAQlIQAISaJyAYt14B1k9CUhAAhKQgGLtGJCABCQgAQk0TkCxbryDrJ4EJCABCUhAsXYMSEACEpCABBonoFg33kFWTwISkIAEJKBYOwYkIAEJSEACjRNQrBvvIKsnAQlIQAISUKwdAxKQgAQkIIHGCSjWjXeQ1ZOABCQgAQko1o4BCUhAAhKQQOMEFOvGO8jqSUACEpCABBRrx4AEJCABCUigcQKKdeMdZPUkIAEJSEACirVj4NQJXCPJpyd51qk3xPpLQAISWERAsXZsnCqBz03y5CSI9V8nueapNsR6S0ACElhFQLFeRci/t0oAa/qNSS5QKngjretWu8p6SUAC2xJQrLcl6OePSeBRSW5fKvDoJN9+zMp4bwlIQAL7IqBY74us1z0EAVzgL+vc6IJJ/vUQN/YeEpCABA5JQLE+JG3vtQ8CzFdfvVz47kkeso+beE0JSEACxySgWB+TvvfeBQFc348sF2IO+9K7uKjXkIAEJNASAcW6pd6wLpsSwPVtoNmm9PycBCTQPAHFuvkusoIjCOD6vms578wkXz/iM54iAQlI4GQIKNYn01VWdAkB1ly/ofN3XOG4xC0SkIAEJkFAsZ5EN9qIssb6hoXEGUl+TCoSkIAEpkJAsZ5KT9oOA80cAxKQwGQJKNaT7dpZNgzX96VKy2+R5CmzpGCjJSCByRFQrCfXpbNuEK7v+xcCbOxBClKLBCQggZMnoFiffBfagA4BA80cDhKQwCQJKNaT7NZZNwrX980LgYcmudusadh4CUhgEgQU60l0o43oEGCNNVtnUkiWQr5wiwQkIIGTJqBYn3T3WfkFBLqBZndIwu5cFglIQAInS0CxPtmus+JLCBho5vCQgAQmRUCxnlR32phCwEAzh4IEJDApAor1pLrTxnQIGGjmcJCABCZDQLGeTFfakB4BA80cEhKQwGQIKNbH6crzJ/mUznHu3s8fSfLBzvGh8v7Dx6nuyd7VQLOT7TorLgEJdAko1rsdDxdOcslyfHaSSyT5nCS85/eX2cHtPjAg4v+W5M1JXpPk78rr3+zgXqd+CdZYP7g0woxmp96b1l8CMyagWG/W+azdvUaSqya5Snm9chIs5lbKx5K8Kclri3jzWt+/vZVK7rkeBprtGbCXl4AEDkNAsV7O+TxFiBHlKyW5Wjkucpju2dtdcKtjeb8wyfOT/GWxzPd2wyNe2ECzI8L31hKQwG4IKNZn58jc8fWTfFk5rpXkHLtB3fxV3lJEG+HmeGUSrPNTL91AM+awL33qDbL+EpDA/Ago1skXJblxkpsk+dIdD4F/TPKu3vHeJP+ehGCx7mt9j9WLRX/egYOHifMl+dTe3y6Q5POS8Lqrwjz485L8RTmevasLH+E6bp15BOjeUgIS2B2BOYo1c8yI802LOCN+m5Z/LhboXyf52zI3/M4izu/Z9KJbfO6iSa5QhPuK5RURJ7htF+UPS95tXMvv3sUFD3SNbkazM5NgbVskIAEJnAyBuYg1gnW7JN+0hRv0RUleVcT55eX9qQRqYaXDoAo4r8y/X36LkYqrHNF+UpI3bHGdQ3zUQLNDUPYeEpDA3ghMWayxMr81ybeUyO11ILI86rlJ/jzJM5O8JMl/rnOBEzmXpWZfXI7rJWGOnvXf65ZXFIub3a54kGmxdAPNzkiCtW2RgAQkcBIEpibWLJ36xiLQN1wjOIz5Y6KiEWaOFyT56En04G4r+b+KYCPc9eChZ53C/DCijThifbcSpGag2Tq96LkSkEBTBKYi1rcqIo1Qjy0ET1XLmVfLMIHLFuG+bomUx30+tjCnj2g/Jslzxn5oj+cZaLZHuF5aAhLYH4FTFWvqfaMk35wEof70EYhwY2M1Py7J7yd5/4jPeMonEviMJLdOcpsk63gvcJX/UpLfSkLE+zHKQ5Lctdz40Um+/RiV8J4SkIAE1iVwamJ9rvIFe58klxvZWFzav1MOllFZdkeA5DCINgdu8zHjiaVrjyrC/fe7q8qoK/UDzchE96+jPulJEpCABI5IYMyX6xGr9z+3Zl3x9ya5R5KLj6jQq4sF/dgTiFQe0ZyTOIV+Idqe4zojavxfSZ5RRPtpB5zbJkc4HgHKHcqDw4jqeooEJCCB4xFoXawvlOQuSb4/Ce7XZYUMXE8oFvRLj4fUO5flcYg2kfjkTF9V2ITkV5M8/ADrt3F9P7JUiPXx11xVOf8uAQlI4NgEWhXriyXB1X3Hkq1rEScCmJh/Zh6aTFtYa5a2CNwgyfcluWUSpjGWFaLyfy3JTyfZ5xp2XN812xtijWhbJCABCTRLoDWxZh76h8r6aJYRLSpY0Q8qltgcl1g1O6CWVIz5baYyvmfEVAai/eulj/ch2syZ377U9aFJ2ErTIgEJSKBZAq2I9Wcl+YkSPPbJS2jhLv2pJL8503XQzQ6kNSp2zpLuE2t7VS528qXjGufBjDzruypsb/qycjGsbALNLBKQgASaJXBssSaJyQ8kuXvZmGIRKPZl/skkj0jyH83StGLrEiCPOTEJpIJdthc4ov0b5UFtV6Ltmut1e8vzJSCBoxE4llhjXd0pyY8kIeXlokLOaUQat6UifbRhsvcbs04e0eahbdma+Y8U0WZMbCvauL4fXFrmmuu9d7E3kIAEtiFwDLH+kjIfiVW1qLy+uMX5Ep1iTu5t+mzKn/20Itos0VvmmsbSRmh/PAl53DcprrnehJqfkYAEjkLgkGJNjulfSHLbJS0lackDSkSwlvRRhkQTN0W071zW1S9bsveOEpDIQ90mKwG6m3u45rqJrrcSEpDAEIFDiPU5yhcvIsyX8FD5YBHynzENqAO1Q4C9xhHteyZhzf2iwk5fRJmTrW6d4prr5bQIxKtL3Jie4OdaeL9syqJ//jr9suhcggH7y+xIclMLf6sZ6RgTZqfbBXWv0QSBfYs1+yWTRWxRRitc3CSo+OEk72yCiJVokQCiTfT4vZJ85pIKklaW9flvHdkIBIVAsypIly4/j/z4SZ1WhXeZ6O5DYFuA1BXx7nuEnvS3rrNvoZesw1IC+xRrvlyxlM+7oAYvLElP2ODBIoExBEg7+6NlXfSidfh4aRh3JFZhvfaq0l1zTYAbm32cWqlCzDw8R1d0Vy2PO7W27qu+VcQR8GrBa53vi7bXXZvAPsSauenfTvJlC2pD1rEfLGulN5lnXLuRfmByBC6T5OfLeu1FjSNxDlb241e0vrvPdYvpR2se82MIMUsm8TzU0nU58/vu3/qYh1zW2w7EIcu/+zDSfd914W97X9pd28sYgYvW+LZU/fxaBHYt1nyxPGlBHm+EGZc3X6AItkUC2xJgvLHt5rL848xjM5+NlbSodNOPHsMVTjuqEFVRXjUnvC67rvAuE93u39a9R6vnd1nW913el9qw4rDiQLif7Rz5hhT92CgCuxTr+yZ5YBICyvqFNbHsPf2cUbXyJAmMJ8B4Q4wJYFw0n/2xJKQVZYwOucYP4QrfpyBXIe5as1V0u3O046nO70xEnAel+sr76tUYSwPWXfFe5nkYe03Pk8B/E9iVWF8lyd8sYIpLnF2zCOSwSGBfBLCU7r8iz/frSk7w5/Uq0XWFn7nCvb6s/nzRY6V1v/C3tZDrvGl1ww4J8r6Yet1P9HjgakfIx1jj9FlXvHWdO6I2JrArsaYCZCT75U5NPpTk28quWBtX0A9KYE0CrED4lSUxE1jZJFRhBUK1shH693Tus+z/on5RD1lia1b1f06vgtwNblo1J7zpvfzcbggwZhDuelx9xGV50KKPWd/PQ6FLy0ZA85SzCOxSrLledSeSJvRmSV4taAkcicBXlbX7V1xwf6zsb+2szeZLtLo9SUWKFVSt4vq6TWS1gnykgXDA23bFe0yAG6KtcB+wg075VrsWa1iQApJlM+8/ZTDWfTIEiKPAil5UGKusTmDJ1l23bLWCvCXAiX0cwa4CXqdIFjVR4Z5Y5++6OfsQ613X0etJYFsCuCifkGRRPvrXliVezHmvKjWJRnVTd13Xqz7r3+dNgCkU4iPInLfMba5wz3ucDLZesXZQzIUASVTOSHLvJEN7ppNN7/lJmNOu6/+rIHfX2DrPOJcRs992rivc5L+3zJiAYj3jzp9p069VrOjLLWg/qxpunoS4C4sEDkFgjHDzkMhUDUsQfWA8RK80dg/FurEOsToHIXDuEltBetGhvADEW3yHKxkO0hfe5OwExgg3gbx4iVzHPaPRo1jPqLNt6icQ+MKSGneRlc0SMASd/bMtEjg0AYSb+W2OoXXdzG1jaU8x69yhWTd/P8W6+S6ygnsmgJX9oCR3WbCUUbf4njvAy48igGCzpHAoMI1lhrjIndcehfI0T1KsT7PfrPXuCdykRIx/xsCldYvvnrdX3IwAS8EQbeIq+gW3eBVt57U349vspxTrZrvGih2BwCWS/G6S6y24Nxn6cIt/5Ah185YS6BLARf5jZSlY3Y+9/h2h5m+4yC0TIaBYT6QjbcbOCLCsi8Q+P7DALf6yJLcyWnxnvL3QdgRIe4qlPTSvjXuch0vntLdj3MSnFesmusFKNEiAdKVsQrPILU6q0qc2WG+rNF8CCDYWdT8YjehxRFvX+AmPDcX6hDvPqu+dAG5x9mf/ggV3+qkk9+skUdl7hbyBBEYQQLCxtrvu8bpOmyVflhMkoFifYKdZ5YMSOGfJdX+PBXf9wyS3TvLBg9bKm0lgOQHmtAk26weiEYR2B13jpzd8FOvT6zNrfBwCX5fkMT1rpdbklUm+IsnbjlM17yqBhQSIHke0+0u+WKONa9zEKicyeBTrE+koq9kEAayVZyQZSqLyriRfmYQANIsEWiOAWxz3eN81btR4az21oD6K9Yl0lNVshsCnJXliEtZl98uHk3xTkjObqa0VkcDHCRA5jpV9+x4UrGxc4wagNTxaFOuGO8eqNUuAfOIPLlnP+pVkx64fLcu/mm2AFZs1AfbWJkK86xpnmReCzaulQQKKdYOdMtEqfVaSC5WlUBdO8pnl5/Ml+ZRysI3l0HuCvMjPTRBX9/i3JFizHxr42/uSvHXPc3J8uT18wZabv5eE5V0mUJnogJ5As7Cy79ppB5Y189gIuaUxAop1Yx1yotXBNXylJP+7zOdeMclnJ7lIEeV+hqVDN/MtRbR5ZetLXt9UjldvWZkbJnlykgsOXOdFSViv/c9b3sOPS2BfBFibjWh3/0cRax5ELQ0RUKwb6owTqMrViiAjyl1hxmI+5YKY/kOSVyV5XpLnl/dj27Qs8Ixo2xvt2cIfW0/Pk8AQgUVu8Vs4btsZMIp1O33RUk2ukATrGHG+Suf9NnXExfbuJERNv6e852fc1bi464HbuP8zru7zdo5P7f3c/Rvv+fv5k1w2CS73TQr1em4RbwT8r1aspV4WeEabCUhjBy+LBFokMBR8xv8sFjYBaJYjE1Csj9wBDdz+OklukOTziyv7mhvW6TVJXpsEt/LryoEYc7xzw2vu6mOfV9zyiDfueV5JyYhFfLE1bvLSIt4INwKOS71bCDz7hd48YP07O3fhEucBwCKBVgngFn9kr3Is7zLz2ZF7TLE+cgcc4fakzmSelYOECVihYwsWMdGifzcgzGOv0eJ5rJtGwL8oyXXLK5byqoJYkx+c4887J2ON/HoSAuO6BY/BNyR52qoL+3cJHJEAbnGs6W6Oceexj9gh3FqxPnIH7Pn2WHrX6ggzFvQYEcIFzPwtmbm6B+7cORT+L5gGQLzrgXUOz0WFBxlSjyLcvOKxeHqS8/Q+8LEk35Lk8XMA2VAbL95ZgcDKBFYjsEnLuZOca8XBKoV6DkvzeOhiambolZUJTOUs+juf4f+LbHdvbohPvyq4xRHobrpSBfuIHaZYHxH+nm6NSGA1E9SEODN3u6zwxfGXSf6iCDPzqkRKW85OgIecanUj4F+YhC+0ReVPk7w8yR0HHpD4wr9LkocJeSsCeIUuXyxArMCLlgMhJlahLhE89mqEZY1kmgjh5nh7kn8sr7yvv2f1wrEKAt1NoqJgH6knFOsjgd/hbXFr487muP4IcWZtMsL8zJLMn+VFls0I8DB0y+LaZi58UfmPAZc457Jr1303u/UsPoXY1tgCXrvviTcY4yWaCqh/6ok6As501N8eIJGJgt3AKFKsG+iEDaqA9Xy7JLct7rxll6iWMxvQcxAk9Z8b3NOPLCeApc189K2SXHoNWI9O8h1JcI/PuSDMMOThs74u81ysy4rleQgeUzlYs7znwC390c6BC7v7c31ff8//DhY97nMOkvh0X3GZM/Ux9Ld6Lmvyccvjjt9VYekhws20FUGevOfALb+LomDvguIW11Cst4B34I9eMsm3FZFmadWiojgfuGMGbkdkPcLNgZt2VSHgjHMRjjkULGIE+dpFnHn4ZO/wTcrry1pg1rMzfdMV4irILcda4JFBuOvB6gRYdH+3TR4DuBB/wlFFnPcf2AC2gr0BtF19RLHeFcn9XIf55m8uAUm4XIcKbm3mnKtb+4X7qYpX3ZAAS+How3ut+DxLuthmc5Mv0Q2rdrCP8fDyxSVYD2Ee2rVsUWVYBogIIzpE39f3vB5zLvdg8MqNcPt3BfxzylJLMgd2o7bH1oullixBrAfxFWOKgj2G0h7OUaz3AHXLS7Lch/W4uLm/trjT+pfEtUXU8WOT/L/ittvytn58zwRYGvaIJF+y5D58cd40CQ9gp1pwAROAR/xEFehVQY60FXczwY3EUPDAyYEbd+7TA2PGAcxZrYBw11feM+Y+ecwFyph7ccneVwV8kUdCwR4JdZenKda7pLndtVbNQzNX9mdFoJ904l/o25E67U/fpuzYtSgZC1+UX7YiW1pLBHDRsvoAcebAk9BfX96vL9HwWMwIchVnYinmMg1wqP5j/py0wAh3V8j5HX9bVfBmdK1v9mqvG9P0BdttNlfR3PLvivWWALf8OAE0ZAz6riRXXnAtvsywoH+nBMdseUs/3gABLM3/W/p+qDrPKS5x1uq2WLCcvzrJ15WUtKvqiKeAjG9M1yDQ5F4ntsJyPAIE8tGP1yvHstUM3Vq+oCPgNaCy/p30pGwKYrazPfSrYr0HqCMueeMi0Cz7IUK0X7A6Hpfkt4oFMuKSnnKCBJju+P2S57xffdZp36yRLTbZxhRxZk6dJBmrAp7eUYSZhw7m4rGaLW0TYD4czwi5BBBwAgDHFGIs+lkQschJUcpKB8uOCCjWOwI54jLMKxHNfbeSHav/ETJgPaFkDeLp1TIPAnhXsDTJmNYvZEJj56Nj7IlNxHaNaOehYlkhAvsPkiDOWM88bFpOn0CNOUC8scJJOrOoEF+Aq71bWCqKlc2rZUsCivWWAEd8nAF+5yTfs8AiIac0eaQR6ikVduuqObfJKFV3ylr1WrNNEUS3KK3jB8vmIEQHk/GJtI0cRAjz0HOK5Y+SfOVAxRFsrFkSq+y7INA8HHxj2SVs0bwmDw+4tQlu/OMDJOXYd7u9/jgCRKRX1zmvVy/xCfwfXqZM6/T3xubKzG8j2ljclg0JKNYbghvxMdbX/tCCTdxxEzKAEen+zk0jLt3EKbhGWe9NxClHFWbajUvtWIX5UYQb6+4VxQXLUz87grVemPog0U2/ELyDlbuvZDZfn+RbS0KXRYxYJkU9nlECHXlgssybAN5C5r55wGZ1CgVPEd7D+/fQOJ+95VhRrLcEOPBxnjBJI4l10i9YIw9N8ru7v+1er4h7i7WybApC1DrRpJvuE73Xiq64ONMLZHgiKQTLVEi72lrpR9nW+uF5Yb32rpYy8SXLtMw3LZmDZi0uY/X3CrfWWFmfdglghWNldzcCobbs2nd3XePrd5xivT6zZZ+4T5KfHjiBSO6fTcLSh9YLqRAJLqnbRRJwskkOZjwGf18sXDYlIBAFa4zXZe+rG7umdKwpGrvpG8+bhIxuJIbgS6G+YuGvW5hnfXZnvrWFCOzfLClI+20h4JBNFVj6tEnB48HqA9bwD82Rc03yTSPOiDSeCYsEtiHAngWINi7zbqlR41jclhEEFOsRkEacgpXCFyzztN3CFx7uICyUVkvdAhJRxnLGMzC2kOqxCjK5iWknvzumyxlBIqMT7ng8AFctbvpFS+P6bSXYC/EmKIb52GOVxxRR7d//4SX+YR3BJl/595Z56KH2kJbzt8sKBDwOcypsk8lBhDtTO93tMlkvvmz7zLqenPgKHvJ47R9Dv+d3U8xUt2zc4BonQry7Axpz2MRIYG1bVhBQrLcbIqyX/YkSQNa9EvOlWC8kFGitYJEyR0mE76oo31r395bkFXWNJWKMSJ9awfJGxBFwIlxJPrIsuxaeAAT7yUnI333o4DWWPVHPfmGKBet3WcEzwQYh9yjeh/65tI128VDwJ6fWkQvqy3wpD2sEdRLUiABzVDHmPZ6j7t+O2XQ2F3lnEmJYyBbG+/ozgZP17289ZiV3eG+8YEzzkESnWxBx12Yr1jscame/FAkhfrm3AQFPzAy6B+3trptdmLzirJP9mgHrf+iKJGLBwnxJOZjjnWoh/ScPLfC52opGElyFuGGFHqpg9SIutazaVpOHD6wYDkSqW4goR5ipP8Fiu9qR6RAseNDqbnCBIPPg2d34gumRqRYeFBF1RJwHZTblwJPF66mJOcYCot21svFkYWXrFl8wgrWs1//X5ssBkWbAdQtJLFiehRv42AXrgWVAPFDwumyrQSKlmUvHakakW/QGHIonWxbCi4caEoAssrrJvvX4MvWx741T7lhWDcDgX5YEgyHMCDTLBPv9zRcgY/ZhSYgfaLUwbplKIqCROXXek+t60x25xrST1QNYsBz069D2mEO/48GH3xPwhxeDyOj+QZwFDxD933dFakwdV51DGxBuDv6fEXC8X7y2WoasbNzhd9AtPtxlivV6Q/n/lEjvbsAV/+R8SR7S2hqqNa5drEM2/yCZwaLCXBkWIkstcO1iuVmGCWBx87RPprlFWbvwOvxGkkcmYbpg14XAnO6cHlH4JCGphS/+H07y/QObvhAsxuoD6taSFY1VjAgTR9DNWX2RHcBjHhRLswrwslcs1WMWHkJ4QMRzwnu4cPA7WGAY8PM2+3ozlYKXrKZ7be3/HRd4d5kXD5Y3UrA/cVgq1uP+VfliIYCMYKxuwZVzz2LxjLvSbs/iH5l5SZbgLNvjmi8v3J5kmZrK/ORuSa6+GlGtsCYWYVHBRc44IcJ8l4X5ZawzCkGANX0na69/deBBgoewBych4c6xC0v9eJDESr5G2ehjE/FhLhcX8NvKa33P2MZbwO+7DzHHbveu78+KB/7fsUgJnOQ7Ce8D//f9dJ/L7o0LHe8ZIo6As9PZsUvfLY5gsyGMSVQ6PaNYrx6mBJDdt3caAWTfXfaQXn2F3Z6Baw33Npt/sJ3iokLaR7Jf8cXdwj/kbikc72pYsqxNvtPAcpRaK9yRuJ1ZarWLObhuoBnrVmsCCr7kCBKjEB3Obmw/WlyhhyaEiDDn3z1IlDN2i0bqi1sZMcGVy4HXoia04W+WYQJY5Qh3Fe/6ns05Vn3H4w2qljfjDCE/RsIbHuSYt65TBHiTsLB38f8ziXGzqiMn0cgNG8HcCS4anmi75YHlC3HDy278MYLEsKDJcDX0JM18G5HLWM9PP6K1v3EDT/CDWLmsW6ZfFq1F/7UydUIq1E0LMQV8mVEYBzyI1cIDGW5T5rYPtWEGS5zqWvy6Hr8fzLasraQrZU61inJ9xW1/iLSqm/bDqX0O4WM1AdNiHCwxXRWEx0MRoslDIMchpwr6go3nku9hy4inrjlCYs73JweipnnixA16yKANlqF8ZxEDrJR+4YuN/MzsbnNmsUzm2GfHbjOJW5jbpq9YDtZ/CCYIid21fnxDLwerDOrubLhCcQnXgkgSeLbPwnK3upkD4oxL+xwjboi1z0MKnp16kGgFod5X6tQR1ZrtKXg5cC9X8aZPlwXv0X8EnlbhPsRyTR5+ibGohWxnJFCZfdGy/vgQYHu4nxmYlybSksxkv3Kg0cLcJG5W5kZxAw0V/mmYG+XJs/vFfaAqepslBEgqQ7AX0xRD0eR/luQXy8PVGJB8oeKepOA92XUkcb8OWF5dqxlxXrUlJtfAXdkXZYSZ/x9LuwRIIIR4Vwuc+IJFUxd4QKpws6xzXwVxvmu5OOOKVQKzL4ybSJ4AAB1wSURBVIr1WdGorIvGou6XXyrrpg8RQck/DVHlWGdDX/J8UZMfGpF2C832/3Xrlqh86RAM1C9kfCNSm6C0ZVHkWBlYGxT6nwe5XRbqyYMqD4Yc1y47KS27BxYX8/I8RNTjEFbXLtvttYYJIIzExLAC4ssHVhjUT7GxSxVucuzv2lNCcBnfiRRc4Rgmsy5zFmvmopl/Zr6xX1iGdb+ye9O+BwhPtWSZ4p9jqODmRqBxo1pOkwCBgKx/HnogpEXEGSDaBAN2c5MzN8yDIkGFlP589aY0sJZZR47LHqFeVagT68mZKycYCYE+dDa3VXX077snQGzMzcpmHAQ2Loo6x7tHQCW7CO5qjru7pIs59EVext23utErzlGsWdPIutTqZul2zROLSB8it/VtikgT9NEvWC08SfIF3nISi0aHdbPVwlJgFQEu8qE1xayBZ4kdYsiSJLwsddciXMr9zRDGNpQxX9PLYi2tcmsz5urSHl4JXDPwayztaZ7H3uY3KUYFlvfQrnsEp7EiAY/ktjvasbqgu33wpee+lGtOYk0CBtzM7NtbLZX6b0WSEPae3uc8DPciYpgvYIImSJXYL0Rx/0Ij62On+ZXTTqvw6PDQSPDWmEJwYzfwZtlnGN9Y4Xy5YtUTZbvsfx3r/Zll3LE2W5f2mB6Z7znMaeORwRtIYOXQdxnxC2TMY/nipgl5sKhrHnEsa36ebZmDWLPpAZnH+snj6XTE+d4HWC9N0BECzdxL35WEi5EvYUSa9duWeRFgj2oC0voJd7oUGB+I9bJCtiuSpOBqX7b+nmuQ1QvLh+QtiPPL54Xc1u6YACl62dWtv3c1t3l/kkcUa3vdh0DFutNRUxVr3HysO0Wkh576iGpkThqX4z4Lm0RgzfP02S/M7fDkSQYqvjwt8yZAViqsbfKS4+6u88REjz9gCRqieHE71nXYQ6cyv0zmOqxnRJrxb5HArgmsCpLFg8lYZZnpmKJYT1isWXaABUvikL6rmwhWkoYgkCSSWGc/4DEDq3sOgTt8wQ5tb8jcI6kgH+u66HWxev4AAVYzDO2KxsMg84cEJmJB7zpa186QwCICdSUEQZVD+8gTk/ODK0SblLTMWdfUtKwPn/W+11OwrLEo6twJyRr6hXV6BGuxtnXfO2Ixj8MWhv0IWx4MiOrG1c3uXBYJ7JIAAZFY5iQgQaA5ulnOdnkvryWBdQjcuLjIbz3wIRJNMQ05NFa70eCMawLOZl1OUaypMxZrFWiiBIcKAQ64XIio3jTAYezgYG0qIk1AT7fgyiTA4udL1qax1/M8CaxDgHH3riR4bSwSaJEAS2WZlmQ1RD/JCW5xAny72SGZuqlWteusTyjd6DnLmlDmftm8gFzIQ4XlJcxD4+p+9gFGLK4ZNvpgWUy3/HsSckLzN75ELRKQgAQkcNbucVjTHOQRqIVpGjygbETD8sK68kGruhBq2bJmHR+dRqQh6/oWbZRAU/6o4/7bd55k7sfcOHmeqVe/kByA3OJs4WeRgAQkIIFPJMD3+xklEBhjrBa8oARCfnXnd7jEOXfWpRWxZnMC5tw4CEhg6clQYELtLLZwQ6Bxn5Dy7lD5hwnmYaN0loP1C8sTGFBvnvWIsvESkIAExhO4bJKfHVgxwxRiN0iY9KO4w2e71vpQYn2XJP0t9NjtBUFGAMdsTkBubIQZNzfBWt20jOOHxmZnsuMVQsya2H55XBFw10hvxtZPSUACEmDzGHLl87qssMkH38Wz2+f6UGKN5bsor+yyjmE9KOtMyZnMOtFDFx4imHf+voEb/26ZXzlEatJDt9v7SUACEjgGAQKHCdbFy1oLq2m6WjVLK/sQYo3grXoKYp6CZVVYp2xA/+Iyb3GI3a4WDUiySrFWuh+5+NSSJpJoc4sEJCABCeyWwLlK0ioSV3Xns/t3IeEU1vgsyiHEGvc3bvB+IRCMxfEcLc3zkpaUIDHc891C3m4CHXiQsEhAAhKQwH4JkMmP5FHd+KW+lU0EOXPZky+HEOtTgfjZJWlJf/E+DxPkvT3EUrBTYWU9JSABCRyCAFY2G97cd4mVTWYzNvpY5cE9RH33dg/F+qyIQ1Lf3SdnrQGshUX5BDKwZttUjXsbgl5YAhKQwEoCZKr87SWrhCa/5/XcxRor+ueSkF2nlo8leXh5kjvEmu2Vo9QTJCABCUggWNk/UrKdDc1lM3/NPPYky1zFmjkQMox9ca9Xn5vkexZsjDDJAWCjJCABCZwYgTqX/dISmEzui1oICJ6kO3xuYk2wG5nHyE/LBuq1EOCGG/wJJzZora4EJCCBuRI4f9kvu7uVJlOXBAJPrsxFrG+Q5GZJ7jSQtpTOfdCBk6xMbiDZIAlIQAJHIsB+ESTMomBV95fbHqlau73tVMT6ImXe+ZJJyIx28SS8Zy76Cwb2toYiSU3uleQtu0Xq1SQgAQlI4MAEWNJVy1R07WwIT6FRl0lC7nB22uKVAxGuYnz5NQcFWdGwsJ+z5uc8XQISkIAE2iSgWO+4X9ifFJFlTTOvFyt7ljL3wHZpvLK7Fr9HnLtbqG1TFTb+YKNz5qR/fZsL+VkJSEACEmiKALrCUlst65HdQvAWWb8QWd5z4I7+3HJcuojxyMttfBrpSv8+CelAeX1VkhdsfDU/KAEJSEACLRMgoKxGhL88CWuyJ1c2dYMjwtcv88HXLPs7sz/pvgqWMYED703yz0neXeaamW/mYINy9o9uKW3pvlh4XQlIQAISOIsAVvUbyis/k3qUFKSTK2PFmixfd07yRUmu1Usisi6UdyVhg456ILz8jld+x3tEmQOBRpwtEpCABCQggT6Bl3UsaYw2PLmTLGPEmrB4MsN0s3wtgsF2kTzlvK1Yurxi+b6j/MyrRQISkIAEJLAtgUcm+fbORW6R5CnbXrTVz68Sa7aD/NqBymP9AoUE6mxryYFIWyQgAQlIQAL7JoBII9a1TNb9XRu4TKx/umT1qud+uFjYT0zyon33hNeXgAQkIAEJLCDQDSo7Mwke4EmXRWJNxq/uOuTHJ7lncW9PGoiNk4AEJCCB5gkQ8c18NYXYJlYbTTIn+CrLGvc2ydIpCPVtm+86KygBCUhAAnMi8MYklyoNnmxO8GVizTrpGgj2gSQsyfrQnEaAbZWABCQggeYJdOetJ29dD7nBr92Zk2ZumtzaFglIQAISkEBrBLrW9aSDzIbE+gpJXlN6hGxg/GyRgAQkIAEJtEaga10j3MxdT7IMifV5kpAxrJYLJfmXSbbeRklAAhKQwKkTmIV1vSga/Gll/2c68d5Jfu7Ue9P6S0ACEpDAJAl0l3ERHE0K7MmVRWL91UmeXlr7/iRsU0k6UIsEJCABCUigJQL9XbdwhWNtT6osS4ryrCQ3LK395STfN6mW2xgJSEACEpgKATJq3rw0hvTYd5tKw2o7lok1212+MgnnsLE3E/mPmRoA2yMBCUhAAidPgAxmTy6tmGSg2arc4FjTD+t0I3uGPuDku9UGSEACEpDA1AhgVNYyOVf4KrGm4T+e5H4dCK8vP5OP1WQpUxvutkcCEpDAaRLoTt1Obs31GLGm234jyXcO9N8fJ/nTJM9P8tzT7F9rLQEJSEACEyDQjQqf3Lz1WLGmH2+ZBBhXXdKpL07y0pIB7SWdROsTGAc2QQISkIAEGibwpUmeWer37CT8PJmyjljXRn9Nku9esM91Hwxu8r9K8sJief/NFEPqJzMabIgEJCCB0yWgWC/ouwsmuV15erleEjYAGVPelwTRxvLmFWuchewWCUhAAhKQwKYEPjfJG8qHJxcRvollvQgkW5V9fpLrltcvTHL+NahjgZOTnONV5fV1a3zeUyUgAQlIYL4EtKy36PvLldRv10nCwY5e51vjerjRsbrfnORNSd6aBAGvUehsNPK2Na7nqRKQgAQkME0C3U09Hl1yg0ympbu0rMdCYRevayW5RjkIWLvo2A/3ziMS/aYbftaPSUACEpDAdAh0o8HPKAHRk2ndMcR6CB7z3yRfv1qJNid72uWTsOPXqoLrg8g/iwQkIAEJzJdAd531jZLw82RKK2K9CChz3lcsG4mwmchFkiDsHOdO8vIkTyjBapPpFBsiAQlIQAJrEWAzD4LLeKVg/E0qcLl1sV6rtzxZAjMncP0kF+jsmDdzHDZ/RgQeleT2pb2TW2NNuxTrGY1mmzp5AnXO7o4l6+DkG2wDJZCku2QLIJNzgSvWjnMJTI/AA8vySQMvp9e3tmiYwOStasXaoS+B6RD4jCQ/keTKZb5unRwH06FgS+ZGoLtca7JWtWI9t2Fte6dO4F1JLlwaeQlzEEy9u2ffvr5QT3Kuuvayc9azH+8CmBABsgCSOZBCsJk74U2oc23K2QiQp+Nlnd+wMohlvP86VU6K9VR71nbNkcBTOxvs3CLJU+YIwTZPngCi/OTOMq3JC7Vu8MmPaRs4MwKPT3Kb0ubbJuFniwSmQoA11PdPcrdOg95bosEna1HrBp/K8LUdEvg4gW5ULGtOHyMcCUyEAG7vR5YU1bVJ7Bfx9VNLfrKov3SDT2Qk2wwJJHlSEtzflFsWV6FgJHDqBLCmySHQLWeWjTomb1FrWZ/68LX+EvhEAs8sQTb8xZz5jpApEMDl/eBOQ3B7EwU+u3gMLespDGfbIIGzCJAL+eoFBq+vEIwETpzAezqBZCzNQqjfeOJt2qj6ivVG2PyQBJok8IEk5y01u2TZ/73JilopCYwg0F2eRcQ3P8+2KNaz7XobPjEC3fzIH0pyviQfm1gbbc68CDCVw9QOZdIJT8Z0q2I9hpLnSKB9AkTFsvaUQjIUkqJYJHDKBOrGNLTh0cUFfsrt2aruivVW+PywBJoh0I2YfUiSuzdTMysigc0IdJcinjEQEb7ZVU/0U4r1iXac1ZZAj8BfdKzpb0nyOAlJ4MQJkE60zlPPPiOfYn3io9nqSyDJZyV5e9mf/j/LZh5E0VokcKoE+pt0XHDKeb/HdJJiPYaS50igbQL3SPLzpYrPSPLlbVfX2klgKQGsaQLLSC9Kmf18NRAUa/9rJHDaBM6R5LVJLlea8Z1JHnHaTbL2MybAqgYCJav7eza5v1f1uWK9ipB/l0DbBNiwo85Pk3rx4klYumWRwKkRwPVNtrJqUVP/GyV51qk1ZB/1Vaz3QdVrSuAwBPj/fWWSK5XbsdSFqFmLBE6JAOLMJh0sP6wFi5pUo0SEW3SDOwYkcNIE2A6zboP54WJVG1h20l06q8oj0nctoty1pslWhpVN+lxLITAVy/rCSf7JXpXAjAh8ZpJXJ+GV8rNJ7jOj9tvU0yWwSKRp0UPLeurZ7KY1thunItasMb1ome/AneKc3dgR4HmnSuCPO1HfLNu6YpL3nWpjrPcsCJA+lH3WcXd3LWkaTzpRpnGcn14wFKYg1jdN8ied9v1Lkl8pT2ha27P4DphdI78jyW92Wm0QzuyGwMk0GFFGoJl/JtK7XxTpkV05BbG+QZIHJbneQJuxsn8uyd+O5OFpEmidwKVKUBkbdVB+NcmdWq+09ZsVAQT65sWC7gaNdSEwL01aXAPIRg6NKYh1beq1k/xAEtLSfXKv/bgMEe0/HcnF0yTQIgH+X5+X5Lqlcm8ukeBsjWmRwDEJjBFoIryfUkTa4LE1e2tKYl2bjuVBRidchdX6qH97Rcn09DtJPromK0+XwDEJ8L/6W0nI+035r5ILHPG2SOBYBOoc9CILmnpVKxqhNnBsw56aolhXFBdI8r1J7lKWtHQRvS3JL5a5bZ72LBJomQBZyliidetOJb87ycNbrrR1mzyB7kYb/cYi0Li4Eeg3Tp7EARo4ZbGu+M6VhCxP90xytR5TosZ/vwTrEOhgkUBrBM5ZxihzgLXcOcnDWquo9ZkVAeabWSPdLQr0HofAHMS6i+8mSe6V5CsGmP5DyalMXuV37JG5l5bAWAI8aJ6Z5Ks6H7h3ib8Yew3Pk8CuCRDV/YbORdk7XQt615R715ubWNfms+nBHcuSArYX7Ba2GCQgjaUxT03yH3vuAy8vgSEClykW9TU7f3xAkvuLSwJHJtC1qt0R60CdMVexrniJGv/aJN+V5CsHoshZp01QD8Lt8q8DDUpv898PknwhnrfDgtUMWNUWCRybAFZ1XTPtGv8D9cbcxbqLmQxobC9IFDlWTb+8oIg2gT7vP1D/eJt5EWD5y2PKA2RtOXEVrG5gPbVFAscmwNaVBJZR3rQg0cmx6zjJ+yvWn9itMOFpEWv7lkk+pXcKGyaQMe1JSf4gCRnTLBLYlsCXJHlCSZtbr8U+1QSW8WqRQAsEiPBmuRaFPN5kJrMcgIBivRwyls7tinD3I8n5JPPbRJGzWToBFm89QJ95i2kRuGrZ1pJ1qt3/x18rX4Q8HFok0AoBdnWreb2JpzC5yYF6RrEeD/rKSb4hya2S8AU7VF5UhBurW2toPNs5nskYYuMCMu51/w9Z98/2gDz8WSTQEgEeKDFMKLrAD9wzivVmwC9bElQg3tdacInXFFc5g/vFm93GT02QwJWSENXNFEv3/+8jZV76gUnePcF226TTJ6AL/Ih9qFhvD/9zisWNcJOzeYgpUeXPTcJWnn+Z5KUuCdse/Ald4fxJblOmVNh4pjtGPlZWHNwvyT+eUJus6rwI4PrGBV7Lpc1MdtgBoFjvljcR5dVVzpdyf0ORercPJiG6HOHmIL/zv+22Kl7tyAToe5LvfFsJEjv3QH1wdf+gUyZH7ilvP4YAUzPsYkghUxlR4ZYDElCs9webJ9Ebl/XbZE7jSXRZeUkRbQLW+Gd43f6q5pX3SODziwVNitt+wp16W/qYTHpOj+yxI7z0Tgl011aTsYw8AJYDElCsDwebtds3LQcifsEVt8bSfmUSdgqrB5GXrvE+XJ+NudMVkrDsiuOGSS654EO4uNnt7bFG0I7B6jkNEeha1QRAkhDF3bMO3EGK9YGBl9uxixKBaVW8r5fkf42sCnsYdwWc90SeM/dp2T8BorirOPPK1Mei8r4kTywC/Uz7aP+d4x32QqBrVZ9RVjHs5UZedDEBxbqN0XGeJF9axPv6Sa6zQbXYho7lFG8pr4g6v2Pt9+uTuF53PaiflwSrmejt7vtPHXGZp5ftAZ8m9xG0PKVlAlrVjfSOYt1IRwxU44plS08sOZIPXCXJpbaoLpnWEHAORL2+xz1LlCfH27e4/il9lGCvi5c5ZV6xji+RBOYIM6/rFKL8mYcm4v85SQggtEjg1AkQd0Nq0ZoHXKv6iD2qWB8R/ga3Pl8RbrKpcZCoBSHvbviwwWXP9hEs8Cre/VcEn7kqXvkbbl7OHzr42z4Ky6Bobz2wdPFM8Nr9fX1/oSQXK4KMKPP+07ao2AdKIOCzSiQ/4myRwBQJEP2NZU1xrvrIPaxYH7kDdnR7rEOefknWQiBb9+BvxyxYmYsE/aNJsHLZt5mDefuh9/xuaOnTPtvFQ8mrk5Dchh3XOIgNYN9ziwSmTqCbrYy23qFM7Uy93c22T7Futmt2WjHculXAEXX282YpGb/DWp9jeVeSdyZ5R3llbp/5fgSag99bJDBHAnxH4P6uOcDds7qBUaBYN9AJR64C7mOWkXHwz1nfL3rtnnNoaxdUWOqrDlzV9Rws5K4oI8IK8ZEHnbdvlgD/36xcqElPiG/hvUu1jtxlivWRO2Ait2d++JwbHDQfV3g9yI/d/Zn39XcGbU1ksNiMZgn0hZqKurNWI92lWDfSEVZDAhKQwJEJ4PruphF1nvrIHdK9vWLdUGdYFQlIQAJHIIBF/eBO5DdVUKiP0BHLbqlYN9YhVkcCEpDAAQkMub4V6gN2wNhbKdZjSXmeBCQggWkRwOVNMFmN+qZ1D01yt2k1cxqtUayn0Y+2QgISkMA6BFhHTdKTrlBrUa9D8MDnKtYHBu7tJCABCRyRwND8NNnJEG+y8lkaJaBYN9oxVksCEpDAjgmwWRDWdM31zeVZR41Qs/2upWECinXDnWPVJCABCeyAANb0/Qfmos8sEeAmPNkB5H1fQrHeN2GvLwEJSOB4BO5a9p/uzk3j9maDjqccr1reeV0CivW6xDxfAhKQQPsEbl9EuuvyptZs5YrbW2u6/T48Ww0V6xPrMKsrAQlIYAkB5qVxefPaLcxN/5g7Z53u2FGsT7fvrLkEJCCBSmCRSOPyRqQfIqrTJqBYn3b/WXsJSGC+BJiHvvkCdzcijUBz6PKewBhRrCfQiTZBAhKYFQHmoXF1M/fcDRyrENh/Gmv6jbOiMvHGKtYT72CbJwEJTIYAVjSpQPvz0TQQS/pRxZJWpCfT5R9viGI9wU61SRJYgwCWmW7SNYAd+FQEGgt6kRX98iLQLMOyHw/cOYe8nWJ9SNreSwLtEWAjB9yquE1xn1qOS6DOQyPOWNBDbm5qSF9hSZsi9Lj9dbC7K9YHQ+2NJNAcAQThyZ1a4T5VtA/fTV2Bpk8WFZZfIdAcuroP309HvaNifVT83lwCRyWAMPDFf4FeLRACdmDSattP9yDONyyWM9YzW1UuKri56SPc3Ar0fvrjJK6qWJ9EN1lJCeyNAMJB0BJHX7QR6zMU7a3ZryPO3EyB3hr59C6gWE+vT22RBDYhsEy02ZGJ9bps/GAQ02q6WM1Yy8QCrLKc69VIA4r1rAW9mu8sz1CsZ9ntNloCCwlU0WYdb78g1IgJwU26yM8K/rp6R5AR52Uu7S5PxBmG9XBISmApAcXaASIBCQwRqBHibAgxVJg/ZS4V4Z76XGoVZZhUa7m+Hzt6FOexpDxvkIBi7cCQgASWEUCo2E6RAytyqGAdYnEjSLjMT7H0BRkLmd8NJSBZ1T7mnOFQD70Qq4j595UEFOuViDxBAhIoBBCwKtz9YLQupK57FwE/dqlCTD2qCPO76rLeRJBrm+oDCsKMh0FhPnZvT/T+ivVEO9ZmSWDPBFj2hXCTYWtVQcgQsSponL+NiHfFl2t1hbfrnt5GhPttor7M2dc2VKt5Vdv9uwR2QkCx3glGLyKB2RJAKGu2LcTxUmuSwBrlqEJYP94V2q4Yr3n50aeTW7sKca0Tr/zOCPjRGD1xXwQU632R9boSmCeBGhGN2HIsmuc+JJ0qxNyzim/34UDX9SF7w3ttRECx3gibH5KABEYSqEFadd0xYk5hLfKmpSu+XKMrvN33WsWbEvZzzRFQrJvrEiskgVkRGAr4AkDf2tX6ndWwsLF9Aoq1Y0ICEpCABCTQOAHFuvEOsnoSkIAEJCABxdoxIAEJSEACEmicgGLdeAdZPQlIQAISkIBi7RiQgAQkIAEJNE5AsW68g6yeBCQgAQlIQLF2DEhAAhKQgAQaJ6BYN95BVk8CEpCABCSgWDsGJCABCUhAAo0TUKwb7yCrJwEJSEACElCsHQMSkIAEJCCBxgko1o13kNWTgAQkIAEJKNaOAQlIQAISkEDjBBTrxjvI6klAAhKQgAQUa8eABCQgAQlIoHECinXjHWT1JCABCUhAAoq1Y0ACEpCABCTQOAHFuvEOsnoSkIAEJCABxdoxIAEJSEACEmicgGLdeAdZPQlIQAISkIBi7RiQgAQkIAEJNE5AsW68g6yeBCQgAQlIQLF2DEhAAhKQgAQaJ6BYN95BVk8CEpCABCSgWDsGJCABCUhAAo0TUKwb7yCrJwEJSEACElCsHQMSkIAEJCCBxgko1o13kNWTgAQkIAEJKNaOAQlIQAISkEDjBBTrxjvI6klAAhKQgAQUa8eABCQgAQlIoHECinXjHWT1JCABCUhAAoq1Y0ACEpCABCTQOAHFuvEOsnoSkIAEJCABxdoxIAEJSEACEmicgGLdeAdZPQlIQAISkIBi7RiQgAQkIAEJNE5AsW68g6yeBCQgAQlIQLF2DEhAAhKQgAQaJ6BYN95BVk8CEpCABCSgWDsGJCABCUhAAo0TUKwb7yCrJwEJSEACElCsHQMSkIAEJCCBxgko1o13kNWTgAQkIAEJKNaOAQlIQAISkEDjBBTrxjvI6klAAhKQgAQUa8eABCQgAQlIoHECinXjHWT1JCABCUhAAoq1Y0ACEpCABCTQOAHFuvEOsnoSkIAEJCABxdoxIAEJSEACEmicwP8HieWr2QVHV0MAAAAASUVORK5CYII=\"/>\n" +
    "\t</defs>\n" +
    "\t<style>\n" +
    "\t\ttspan { white-space:pre }\n" +
    "\t\t.background { fill: var(--skin-color) }\n" +
    "\t\t.left-eyeball-back { fill: var(--eye-back-color);stroke: #000000;stroke-width: 4.4 }\n" +
    "\t\t.left-eyeball { fill: var(--eye-ball-color);stroke: #000000;stroke-width: 4.4 }\n" +
    "\t</style>\n" +
    "\t<path id=\"background\" class=\"background\" d=\"M179 2L200 55C200 55 129 -8.05 22 50C15.5 55.05 -38 149.95 55 178C78 187.05 111.5 205.95 209 200C221.5 199.05 234 205.95 265 223C282.5 229.55 368 247.45 402 187C404.75 183.28 424 179.47 429 166C429.25 162.28 445.17 146.82 437 134C436.5 130.35 441.33 122.32 431 115C420.67 107.68 441.83 108.98 404 84C400.67 80.85 392.4 56.78 322 46C316.6 45.02 205.4 54.38 203 54C200.6 53.62 179 2 179 2Z\" />\n" +
    "\t<path id=\"left-eyeball-back\" class=\"left-eyeball-back\" d=\"M246 150C246 150 257.5 127.95 241 121C224.5 114.05 139.5 69.95 58 144C53.5 148.05 206 151.45 246 150Z\" />\n" +
    "\t<path id=\"left-eyeball\" class=\"left-eyeball\" d=\"M105 147C105 147 96.5 114.47 135 109C173.5 103.53 187 129.22 183 148C162.25 148.28 105 147 105 147Z\" />\n" +
    "\t<use  id=\"left-reflection\" href=\"#img1\" transform=\"matrix(1,0,0,1,125,115)\"/>\n" +
    "\t<path id=\"right-eyeball-back\" class=\"left-eyeball-back\" d=\"M435 131C435 131 325 65.45 251 143C248 149.55 219.5 155.95 436 151C441 150.05 441.17 137.65 435 131Z\" />\n" +
    "\t<path id=\"right-eyeball\" class=\"left-eyeball\" d=\"M297.83 149.68C297.83 149.68 292.5 113.22 325 109C357.5 104.78 377 114.22 377 149C360.5 149.03 300.21 149.93 297.83 149.68Z\" />\n" +
    "\t<use  id=\"right-reflection\" href=\"#img1\" transform=\"matrix(1,0,0,1,318,117)\"/>\n" +
    "\t<use  id=\"outlines\" href=\"#img2\" transform=\"matrix(1,0,0,1,3,-52)\"/>\n" +
    "</svg>\n".trim();

const happyEyesCss = {
    left: 0,
    width: 440,
    top: 0,
}
