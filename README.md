# WebSIG

Consultas:

select uf.gid, uf.nm_estado, uf.geom from brufe250gc_sir uf where st_area(uf.geom) > 50

select po.gid, po.municipio, po.geom from portos_2014 po, hidrovias_linha_2014 hi 
where po.nome_regia = 'Sul' and st_crosses(st_buffer(po.geom, 0.5), hi.geom)
group by po.gid, po.municipio, po.geom

select uf2.gid, uf2.nm_estado, uf2.geom
from brufe250gc_sir uf1, brufe250gc_sir uf2
where uf1.nm_estado = 'MARANHÃO' and st_intersects(uf1.geom, uf2.geom)
and uf2.nm_estado <> 'MARANHÃO'