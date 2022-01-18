# WebSIG

Consultas:

* Estados com área inferior a 50 unidades quadradas

select uf.gid, uf.nm_estado, uf.geom from brufe250gc_sir uf where st_area(uf.geom) > 50

* Portos da região Sul que estejam sobre hidrovias

select po.gid, po.municipio, po.geom from portos_2014 po, hidrovias_linha_2014 hi 
where po.nome_regia = 'Sul' and st_crosses(st_buffer(po.geom, 0.5), hi.geom)
group by po.gid, po.municipio, po.geom

* Estados que fazem fronteira com o Maranhão

select uf2.gid, uf2.nm_estado, uf2.geom
from brufe250gc_sir uf1, brufe250gc_sir uf2
where uf1.nm_estado = 'MARANHÃO' and st_touches(uf1.geom, uf2.geom)
and uf2.nm_estado <> 'MARANHÃO'

Base de dados logística Brasil IBGE:
https://www.ibge.gov.br/geociencias/cartas-e-mapas/redes-geograficas/15793-logistica-dos-transportes.html?=&t=downloads

Base de dados estados Brasil IBGE:
https://portaldemapas.ibge.gov.br/portal.php#homepage
Organização do Território -> Malhas Territoriais -> Malha de unidade da federação -> Malha com todas as UFs -> Brasil - Unidades da federação (ano > 2015)