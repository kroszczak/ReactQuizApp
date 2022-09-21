<View style={{ flex: 0.07, backgroundColor: '#67B441', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20,  paddingRight: 20 }}>
                        <TextInput
                            onChangeText={(text) => {
                                let result = []
                                // let middleware = []
                                // text = text.split(' ').filter(x => x)
                                // console.log(text)
                                data.map(e => { if(e.title.includes(text)) result.push(e) })
                                setResult(result);
                            }}
                            
                            // value
                            placeholder="Wyszukaj"
                        />
                        <Text>LUPA</Text>
                    </View>